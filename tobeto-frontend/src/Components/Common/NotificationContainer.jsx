import React, { useState, useEffect } from "react";
import NotificationService from "../../Services/NotificationService";
import NotificationCard from "./NotificationCard";
import { Button, Container, Row, Col } from "react-bootstrap";
import { SlArrowRight } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";


const NotificationContainer = () => {
  const [notifications, setNotifications] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const response = await NotificationService.getNotifications();
      setNotifications(response.data.items);
    } catch (error) {
      console.error("Bildirimler yüklenirken bir hata oluştu:", error);
    }
  };

  const handleMoreClick = async () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    await new Promise((resolve) => setTimeout(resolve, 1000));
    navigate("/Duyurularım");
  };
  const SafeHtmlContent = ({ htmlContent }) => {
    const cleanHtml = DOMPurify.sanitize(htmlContent);
    return <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />;
  };

  return (
    <Container>
      <Row className="mb-4">
        {notifications.slice(0,3).map((notification) => (
          <Col xs={1} md={2} lg={4} key={notification.id}>
            <NotificationCard
              type="Duyuru"
              corpName="İstanbul Kodluyor"
              header={notification.title}
              date="06.01.2024"
              content={<SafeHtmlContent htmlContent={notification.label} />}
            />
          </Col>
        ))}
      </Row>
      <Row>
        <Col xs={12} className="text-center">
          <Button
            onClick={handleMoreClick}
            variant="shadow-lg"
            className="rounded-circle shadow-sm"
            style={{ width: "30px", height: "30px", padding: 0 }}
          >
            <SlArrowRight className="fs-5" />
          </Button>
          <div className="mt-2 text-muted">Daha Fazla Göster</div>
        </Col>
      </Row>
    </Container>
  );
};

export default NotificationContainer;
