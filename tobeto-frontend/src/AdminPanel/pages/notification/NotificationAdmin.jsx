import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  Form,
  Card,
} from "react-bootstrap";
import notificationAdminService from "../../services/notificationAdminService";
import ReactQuill from "react-quill";
import DOMPurify from "dompurify";

const NotificationAdmin = () => {
  const [notifications, setNotifications] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentNotification, setCurrentNotification] = useState({
    id: "",
    title: "",
    label: "",
  });
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedNotificationId, setSelectedNotificationId] = useState(null);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    const response = await notificationAdminService.getNotifications();
    setNotifications(response.data.items);
  };

  const handleShowModal = (notification = { id: "", title: "", label: "" }) => {
    setCurrentNotification(notification);
    setIsUpdateMode(!!notification.id);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentNotification({ id: "", title: "", label: "" });
    setIsUpdateMode(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isUpdateMode) {
      await notificationAdminService.updateNotification(
        currentNotification.id,
        currentNotification.title,
        currentNotification.label
      );
    } else {
      await notificationAdminService.addNotification(
        currentNotification.title,
        currentNotification.label
      );
    }
    fetchNotifications();
    handleCloseModal();
  };

  const handleDelete = async (id) => {
    await notificationAdminService.deleteNotification(id);
    fetchNotifications();
  };
  const handleDeleteClick = (id) => {
    setSelectedNotificationId(id);
    setShowDeleteModal(true);
  };

  const deleteNotification = async () => {
    await notificationAdminService.deleteNotification(selectedNotificationId);
    setShowDeleteModal(false);
    fetchNotifications();
  };

  const SafeHtmlContent = ({ htmlContent }) => {
    const cleanHtml = DOMPurify.sanitize(htmlContent);
    return <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />;
  };

  return (
    <Container>
      <Row className="mb-2">
        <Col>
          <Button onClick={() => handleShowModal()}>Duyuru Ekle</Button>
        </Col>
      </Row>
      <Row>
        {notifications.map((notification) => (
          <Col xs={12} md={6} lg={3} key={notification.id}>
            <Card
              className="mt-3 shadow-sm"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
            >
              <Card.Body>
                <Card.Title className="fw-bold fs-5">
                  {notification.title}
                </Card.Title>
                <Card.Text>
                <SafeHtmlContent
                    htmlContent={
                        notification.label.length > 50
                        ? DOMPurify.sanitize(notification.label.substring(0,30) + "...")
                        : DOMPurify.sanitize(notification.label)
                    }
                    />
                </Card.Text>

                <Row className="mt-3">
                  <Col md={6} className="d-grid">
                    <Button
                      variant="warning"
                      onClick={() => handleShowModal(notification)}
                    >
                      Güncelle
                    </Button>
                  </Col>
                  <Col md={6} className="d-grid">
                    <Button
                      variant="danger"
                      onClick={() => handleDeleteClick(notification.id)}
                    >
                      Sil
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {isUpdateMode ? "Duyuru Güncelle" : "Duyuru Ekle"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Başlık</Form.Label>
              <Form.Control
                type="text"
                value={currentNotification.title}
                onChange={(e) =>
                  setCurrentNotification({
                    ...currentNotification,
                    title: e.target.value,
                  })
                }
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>İçerik</Form.Label>
              <ReactQuill
                theme="snow"
                value={currentNotification.label}
                onChange={(content) =>
                  setCurrentNotification({
                    ...currentNotification,
                    label: content,
                  })
                }
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Kaydet
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Duyuru Sil</Modal.Title>
        </Modal.Header>
        <Modal.Body>Emin misiniz?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            İptal
          </Button>
          <Button variant="danger" onClick={deleteNotification}>
            Evet, Sil
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default NotificationAdmin;
