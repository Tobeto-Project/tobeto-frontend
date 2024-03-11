import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import ExamsSearchMenu from '../../components/examSearchMenu';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import { deleteExamById, fetchAllExams, addExam } from '../../services/examService';
import { fetchQuestionsByExamId, addQuestionToExam } from '../../services/questionService';

const Exam = () => {
    const [exams, setExams] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [showDetailsModal, setShowDetailsModal] = useState(false);
    const [selectedExam, setSelectedExam] = useState(null);
    const [showAddQuestionModal, setShowAddQuestionModal] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [newQuestion, setNewQuestion] = useState({
        questionText: '',
        optionA: '',
        optionB: '',
        optionC: '',
        optionD: '',
        correctAnswer: '',
    });

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

    const filteredExams = exams.filter(exam =>
        exam.examName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleShowDetails = (exam) => {
        setSelectedExam(exam);
        setShowDetailsModal(true);
    };

    const handleCloseDetails = () => setShowDetailsModal(false);

    const handleAddQuestionClick = async (examId) => {
        try {
            const fetchedQuestions = await fetchQuestionsByExamId(examId);
            console.log('Fetched Questions:', fetchedQuestions);
            setQuestions(fetchedQuestions);
            setSelectedExam(examId);
            setShowAddQuestionModal(true);
        } catch (error) {
            console.error("Soruları getirirken bir hata oluştu.");
            toast.error('Soruları getirirken bir hata oluştu.');
        }
    };

    const handleCloseAddQuestionModal = () => {
        setShowAddQuestionModal(false);
        setNewQuestion({
            questionText: '',
            optionA: '',
            optionB: '',
            optionC: '',
            optionD: '',
            correctAnswer: '',
        });
    };

    const handleAddQuestion = async () => {
        try {
            const response = await addQuestionToExam(selectedExam.id, newQuestion);
            console.log("examid", selectedExam.id)
            const addedQuestion = response.data;

            toast.success('Soru başarıyla eklendi.');
            console.log('Questions:', questions);
            setQuestions((prevQuestions) => [...prevQuestions, addedQuestion]);
            handleCloseAddQuestionModal();
        } catch (error) {
            console.error("Soru eklenirken bir hata oluştu.");
            console.log("examid", selectedExam.id)

            toast.error('Soru eklenirken bir hata oluştu.');
        }
    };

    return (
        <>
            <ExamsSearchMenu onSearchChange={handleSearchChange} />
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
                            <td><Button variant="primary" onClick={() => handleAddQuestionClick(exam.id)}>Soru Ekle</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            {/* Soru Ekle Modal */}
            <Modal show={showAddQuestionModal} onHide={handleCloseAddQuestionModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Soru Ekle</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Soru Metni</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Soru Metni"
                                value={newQuestion.questionText}
                                onChange={(e) => setNewQuestion({ ...newQuestion, questionText: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Seçenek A</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Seçenek A"
                                value={newQuestion.optionA}
                                onChange={(e) => setNewQuestion({ ...newQuestion, optionA: e.target.value })}
                            />
                            <Form.Label>Seçenek B</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Seçenek B"
                                value={newQuestion.optionB}
                                onChange={(e) => setNewQuestion({ ...newQuestion, optionB: e.target.value })}
                            />
                            <Form.Label>Seçenek C</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Seçenek C"
                                value={newQuestion.optionC}
                                onChange={(e) => setNewQuestion({ ...newQuestion, optionC: e.target.value })}
                            />
                            <Form.Label>Seçenek D</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Seçenek D"
                                value={newQuestion.optionD}
                                onChange={(e) => setNewQuestion({ ...newQuestion, optionD: e.target.value })}
                            />

                            <Form.Group className="mb-3">
                                <Form.Label>Doğru Cevap</Form.Label>
                                <Form.Control
                                    as="select"
                                    value={newQuestion.correctAnswer}
                                    onChange={(e) => setNewQuestion({ ...newQuestion, correctAnswer: e.target.value })}
                                >
                                    <option value="">Seçiniz...</option>
                                    <option value="A">Seçenek A</option>
                                    <option value="B">Seçenek B</option>
                                    <option value="C">Seçenek C</option>
                                    <option value="D">Seçenek D</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Group>
                        <Button variant="primary" onClick={handleAddQuestion}>
                            Soruyu Ekle
                        </Button>
                    </Form>
                    <Table striped bordered hover variant="light" className='mt-3'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Soru:</th>
                                <th>A:</th>
                                <th>B:</th>
                                <th>C:</th>
                                <th>D:</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(questions) && questions.map((question, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{question.questionText}</td>
                                    <td>{question.optionA}</td>
                                    <td>{question.optionB}</td>
                                    <td>{question.optionC}</td>
                                    <td>{question.optionD}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseAddQuestionModal}>Kapat</Button>
                </Modal.Footer>
            </Modal>
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
            <ToastContainer />
        </>
    );
};

export default Exam;
