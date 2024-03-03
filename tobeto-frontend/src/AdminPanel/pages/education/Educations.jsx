// Educations.jsx
import React, { useState, useEffect } from 'react';
import { Button, Modal, Form, Table } from 'react-bootstrap';
import educationService from '../../services/educationService';
import instructorsService from '../../services/instructorsService';

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
    const [instructorData, setInstructorData] = useState([]);

    useEffect(() => {
        educationService.getCourses()
            .then(items => setCourses(items))
            .catch(error => {
                console.error('Error fetching courses:', error);
            });
    }, []);
    

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

    const handleShowLessons = (moduleId) => {
        const selectedModule = courseModules.find(module => module.id === moduleId);

        if (selectedModule) {
            educationService.getLessons(moduleId)
                .then(items => {
                    console.log("itemleeerrr", items);
                    setSelectedLessons(items);
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
        educationService.addLesson(selectedModuleIdForLessons, newLessonName)
            .then(data => {
                console.log('Lesson added successfully:', data);
                handleCloseAddLessonModal();
            })
            .catch(error => {
                console.error('Error adding lesson:', error);
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
                    <ul>
                        {courseModules.map(module => (
                            <li key={module.id}>
                                {module.name}
                                <Button variant="primary" onClick={() => handleShowLessons(module.id)}>
                                    Show Lessons
                                </Button>
                                {/* ... (other buttons or actions for the module) */}
                            </li>
                        ))}
                    </ul>
                </Modal.Body>
            </Modal>

            <Modal show={showAddLessonModal} onHide={handleCloseAddLessonModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Lessons for Course Module</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul>
                        {selectedLessons
                            .filter(lesson => lesson.courseModuleId === selectedModuleIdForLessons)
                            .map(filteredLesson => (
                                <li key={filteredLesson.id}>{filteredLesson.name}</li>
                            ))}
                    </ul>
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
