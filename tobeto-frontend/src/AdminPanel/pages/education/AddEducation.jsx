import React, { useState, useEffect } from 'react';
import { Form, Dropdown, InputGroup, Button } from 'react-bootstrap';
import educationService from '../../services/educationService';

const AddEducation = () => {
    const [courseTypes, setCourseTypes] = useState([]);
    const [selectedCourseType, setSelectedCourseType] = useState('');
    const [newCourseName, setNewCourseName] = useState('');
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        // educationService üzerinden tür verilerini çekme
        educationService.getCourseTypes()
            .then(items => setCourseTypes(items))
            .catch(error => {
                console.error('Error fetching course types:', error);
            });
    }, []);// Boş dependency array, sadece bir kere yüklenmesini sağlar

    useEffect(() => {
        // educationService üzerinden kategori verilerini çekme
        if (selectedCourseType) {
            educationService.getCategories(selectedCourseType.id)
                .then(items => setCategories(items))
                .catch(error => {
                    console.error('Error fetching categories:', error);
                });
        }
    }, [selectedCourseType]);

    const handleAddCourse = () => {
        // educationService üzerinden yeni kursu eklemek için API isteği
        educationService.addCourse(selectedCourseType.id, newCourseName, selectedCategory.id)
            .then(data => {
                // Başarılı ekleme durumunda gerekli işlemleri burada yapabilirsiniz.
                console.log('Course added successfully:', data);
            })
            .catch(error => {
                console.error('Error adding course:', error);
            });
    };


    return (
        <Form>
            <Form.Group controlId="educationForm">
                <Form.Label>Education Type</Form.Label>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {selectedCourseType ? selectedCourseType.name : 'Select Education Type'}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {courseTypes.map(courseType => (
                            <Dropdown.Item
                                key={courseType.id}
                                onClick={() => setSelectedCourseType(courseType)}
                            >
                                {courseType.name}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            </Form.Group>

            {selectedCourseType && (
                <Form.Group controlId="categoryForm">
                    <Form.Label>Category</Form.Label>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="category-dropdown">
                            {selectedCategory ? selectedCategory.name : 'Select Category'}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {categories.map(category => (
                                <Dropdown.Item
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category)}
                                >
                                    {category.name}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                </Form.Group>
            )}

            {selectedCourseType && (
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Enter Course Name"
                        value={newCourseName}
                        onChange={(e) => setNewCourseName(e.target.value)}
                    />
                    <InputGroup.Text>
                        <Button variant="outline-secondary" onClick={handleAddCourse}>Add</Button>
                    </InputGroup.Text>
                </InputGroup>
            )}
        </Form>
    );
}

export default AddEducation;
