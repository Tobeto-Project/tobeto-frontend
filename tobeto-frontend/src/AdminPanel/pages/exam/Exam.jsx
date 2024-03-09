import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { deleteExamById, fetchAllExams } from '../../services/examService';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { ToastContainer, toast } from 'react-toastify';
import ExamsSearchMenu from '../../components/examSearchMenu';
import Modal from 'react-bootstrap/Modal';


const Exam = () => {
    const [exams, setExams] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [showDetailsModal, setShowDetailsModal] = useState(false);
    const [selectedExam, setSelectedExam] = useState(null);

    const handleDeleteClick = async (examId) => {
        try {
            await deleteExamById(examId);
            const updatedExams = exams.filter(exam => exam.id !== examId);
            setExams(updatedExams);
            toast.success('Sınav başarıyla silindi.');
        } catch (error) {
            console.error("Sınav silinirken bir hata oluştu.");
            toast.error('Sınav silinirken bir hata oluştu.');
        }
    };
      
    useEffect(() => {
        const getExams = async () => {
            try {
                const data = await fetchAllExams();
                setExams(data.items);
                setIsLoading(false);
            } catch (error) {
                
                console.error('Sınavları yüklerken hata oluştu:', error);
                setIsLoading(false);
            }
        };

        getExams();
    }, []);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredExams = exams.filter(exam =>
        exam.examName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleShowDetails = (exam) => {
        setSelectedExam(exam);
        setShowDetailsModal(true);
    };

    const handleCloseDetails = () => setShowDetailsModal(false);

    if (isLoading) {
        return <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>;
    }

    return (
        <>
        <ExamsSearchMenu onSearchChange={handleSearchChange}/>
        <Table striped bordered hover variant="light" className='me-5'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Sınav Adı</th>
                    <th>Sınav Tarihi</th>
                  
                </tr>
            </thead>
            <tbody>
                {filteredExams.map((exam, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{exam.examName}</td>
                        <td>{exam.examDate}</td>
                        <td><Button variant="danger" onClick={() => handleDeleteClick(exam.id)}>Sınavı Sil </Button></td>
                        <td><Button variant="info" onClick={() => handleShowDetails(exam)}>Detaylar</Button></td>
                    </tr>
                ))}
            </tbody>
        </Table>
        <Modal show={showDetailsModal} onHide={handleCloseDetails}>
                <Modal.Header closeButton>
                    <Modal.Title>Sınav Detayları</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedExam && (
                        <>
                            <p>Sınav Adı: {selectedExam.examName}</p>
                            <p>Sınav Tarihi: {selectedExam.examDate}</p>                         
                        </>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseDetails}>Kapat</Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer/>
        </>
    );
};

export default Exam;
