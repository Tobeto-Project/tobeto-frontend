import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Form, ListGroup } from 'react-bootstrap';
import { fetchCompetenceList, addCompetence, deleteCompetence } from "../../services/addCompatenceService";

const AddCompetence = () => {
    const [competence, setCompetence] = useState('');
    const [competenceList, setCompetenceList] = useState([]);

    useEffect(() => {
        fetchCompetenceList()
            .then(competenceData => setCompetenceList(competenceData))
            .catch(error => console.error('Error fetching competence list:', error));
    }, []);

    const handleAddCompetence = async () => {
        try {
            await addCompetence(competence);
            fetchCompetenceList()
                .then(competenceData => setCompetenceList(competenceData))
                .catch(error => console.error('Error fetching competence list:', error));
            setCompetence('');
        } catch (error) {
            console.error('Error adding competence:', error);
        }
    };

    const handleDeleteCompetence = async (id) => {
        try {
            await deleteCompetence(id);
            fetchCompetenceList()
                .then(competenceData => setCompetenceList(competenceData))
                .catch(error => console.error('Error fetching competence list:', error));
        } catch (error) {
            console.error('Error deleting competence:', error);
        }
    };

    return (
        <div>
            <Form>
                <Form.Group controlId="formCompetence">
                    <Form.Label>Add Competence:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter competence"
                        value={competence}
                        onChange={(e) => setCompetence(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" onClick={handleAddCompetence}>Add</Button>
            </Form>
            <hr />
            <h2>Competence List</h2>
            <ListGroup>
                {Array.isArray(competenceList) && competenceList.map((competenceItem, index) => (
                    <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center mx-5">
                        {competenceItem.name}
                        <Button variant="danger" onClick={() => handleDeleteCompetence(competenceItem.id)}>Delete</Button>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
};

export default AddCompetence;
