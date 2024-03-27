// Educations.jsx
import React, { useState, useEffect } from 'react';
import { Button, Modal, Form, Table } from 'react-bootstrap';
import educationService from '../../services/educationService';
import instructorsService from '../../services/instructorsService';
import axios from 'axios';
import API_CONFIG from '../../../Services/ApiConfig';

const Educations = () => {
    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [showAddModuleModal, setShowAddModuleModal] = useState(false);
    const [newModuleName, setNewModuleName] = useState('');
    const [showDetailsModal, setShowDetailsModal] = useState(false);
    const [courseModules, setCourseModules] = useState([]);
    const [newLessonName, setNewLessonName] = useState('');
    const [showAddLessonModal, setShowAddLessonModal] = useState(false);
    const [selectedModuleId, setSelectedModuleId] = useState(null);
    const [selectedLessons, setSelectedLessons] = useState([]);
    const [selectedModuleIdForLessons, setSelectedModuleIdForLessons] = useState(null);
    const [instructors, setInstructors] = useState([]);
    const [selectedInstructorId, setSelectedInstructorId] = useState(null);
    const [newVideoLink, setNewVideoLink] = useState('');



    useEffect(() => {
        educationService.getCourses()
            .then(items => setCourses(items))
            .catch(error => {
                console.error('Error fetching courses:', error);
            });
    }, []);


    // Fetch courses


    // Fetch instructors
    const fetchInstructors = async () => {
        try {
            const response = await axios.get(`${API_CONFIG.INSTRUCTORS_GETLIST}`, {
                params: { PageIndex: 0, PageSize: 100 },
            });

            console.log("instructors", response.data)
            setInstructors(response.data.items || []);
        } catch (error) {
            console.error('Error fetching instructors:', error);
        }
    };




    const handleShowAddModuleModal = (course) => {
        setSelectedCourse(course);
        setShowAddModuleModal(true);
    };

    const handleCloseAddModuleModal = () => {
        setNewModuleName('');
        setShowAddModuleModal(false);
    };

    const handleAddModule = () => {
        educationService.addModule(selectedCourse.id, newModuleName)
            .then(data => {
                console.log('Module added successfully:', data);
                handleCloseAddModuleModal();
            })
            .catch(error => {
                console.error('Error adding module:', error);
            });
    };

    const handleShowDetailsModal = (course) => {
        const CourseId = course.id;

        educationService.getCourses()
            .then(courses => {
                const selectedCourse = courses.find(c => c.id === CourseId);

                if (selectedCourse) {
                    educationService.getModules(CourseId)
                        .then(items => {
                            const filteredModules = items.filter(module => module.courseId === CourseId);
                            setCourseModules(filteredModules);
                            fetchInstructors();
                            setShowDetailsModal(true);
                        })
                        .catch(error => {
                            console.error('Error fetching course modules:', error);
                        });
                } else {
                    console.error('Selected course not found');
                }
            })
            .catch(error => {
                console.error('Error fetching courses:', error);
            });
    };

    const handleShowLessons = (moduleId, instructorId) => {
        const selectedModule = courseModules.find(module => module.id === moduleId);

        if (selectedModule) {
            educationService.getLessons(moduleId)
                .then(items => {
                    console.log("gelenderslerrr", items);
                    setSelectedLessons(items);


                    setSelectedInstructorId(instructorId);

                    setSelectedModuleIdForLessons(moduleId);
                    setShowAddLessonModal(true);
                })
                .catch(error => {
                    console.error('Error fetching lessons:', error);
                });
        } else {
            console.error('Selected module not found');
        }
    };


    const handleCloseAddLessonModal = () => {
        setNewLessonName('');
        setSelectedModuleId(null);
        setSelectedModuleIdForLessons(null);
        setShowAddLessonModal(false);
    };

    const handleAddLesson = () => {
        educationService.addLesson(
            selectedModuleIdForLessons,
            newLessonName,
            newVideoLink // Video linkini de API'ye gönder
        )
            .then(data => {
                console.log('Lesson added successfully:', data);
                handleCloseAddLessonModal();
            })
            .catch(error => {
                console.error('Error adding lesson:', error);
                // Log additional details about the response
                if (error.response) {
                    console.error('Response status:', error.response.status);
                    console.error('Response data:', error.response.data);
                }
            });
    };







    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Course Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map(course => (
                        <tr key={course.id}>
                            <td>{course.name}</td>
                            <td>
                                <Button variant="info" onClick={() => handleShowAddModuleModal(course)}>
                                    Add Module
                                </Button>
                                <Button variant="primary" onClick={() => handleShowDetailsModal(course)}>
                                    Course Details
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Modal show={showAddModuleModal} onHide={handleCloseAddModuleModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Module</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="formModuleName">
                        <Form.Label>Module Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter module name"
                            value={newModuleName}
                            onChange={(e) => setNewModuleName(e.target.value)}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseAddModuleModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleAddModule}>
                        Add Module
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showDetailsModal} onHide={() => setShowDetailsModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Course Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h2>Instructors:</h2>
                    <ul>
                        {instructors.map(instructor => (
                            <li key={instructor.id}>{instructor.firstName + ' ' + instructor.lastName}</li>
                        ))}
                    </ul>

                    <h2>Course Modules:</h2>
                    <ul>
                        {courseModules.map(module => (
                            <li key={module.id}>
                                {module.name}
                                <Button variant="primary" onClick={() => handleShowLessons(module.id)}>
                                    Show Lessons
                                </Button>
                            </li>
                        ))}
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDetailsModal(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showAddLessonModal} onHide={handleCloseAddLessonModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Lesson</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Input for lesson name */}
                    <ul>
                        {selectedLessons
                            .filter(lesson => lesson.courseModuleId === selectedModuleIdForLessons)
                            .map(filteredLesson => (
                                <li key={filteredLesson.id}>
                                    <div>
                                        <strong>Lesson Name: </strong> {filteredLesson.name}
                                    </div>
                                    <div>
                                        <strong>Video Link: </strong> {filteredLesson.video}
                                    </div>
                                </li>
                            ))}
                    </ul>

                    <Form.Group controlId="newLessonName">
                        <Form.Label>Lesson Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter lesson name"
                            value={newLessonName}
                            onChange={(e) => setNewLessonName(e.target.value)}
                        />
                    </Form.Group>

                    {/* Input for video link */}
                    <Form.Group controlId="newVideoLink">
                        <Form.Label>Video Link</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter video link"
                            value={newVideoLink}
                            onChange={(e) => setNewVideoLink(e.target.value)}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseAddLessonModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleAddLesson}>
                        Add Lesson
                    </Button>
                </Modal.Footer>
            </Modal>


            {/* ... (remaining code) */}
        </div>
    );
}

export default Educations;
