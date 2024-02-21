import React, { useEffect, useState } from "react";
import PlatformHeader from "../../Components/Layouts/PlatformHeader";
import MiddleBanner from "../../Components/Common/MiddleBanner";
import { Col, Container, Pagination, Row } from "react-bootstrap";
import NotificationService from "../../Services/NotificationService";
import NotificationCard from "../../Components/Common/NotificationCard";
import DOMPurify from "dompurify";
import SearchFilterUI from "../../Components/Common/Notifications/SearchFilterUI";

const MyNotification = () => {
  const [notifications, setNotifications] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchNotifications(currentPage - 1, 12); // API 0-indexed sayfa numaralarını kullanıyor
  }, [currentPage]);

  const fetchNotifications = async (pageIndex, pageSize) => {
    try {
      const response = await NotificationService.getNotifications(
        pageIndex,
        pageSize
      );
      setNotifications(response.data.items);
      const totalItems = response.data.count;
      setTotalPages(Math.ceil(totalItems / pageSize));
    } catch (error) {
      console.error("Duyurular yüklenirken bir hata oluştu:", error);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  let items = [];
  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => handlePageChange(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  const SafeHtmlContent = ({ htmlContent }) => {
    const cleanHtml = DOMPurify.sanitize(htmlContent, {USE_PROFILES: {html: true}});
    return <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />;
  };
  


  return (
    <>
      <PlatformHeader />
     <MiddleBanner>
        <p style={{ fontSize: "6rem" , marginLeft:"12rem"}} className="text-white fw-bold">
          Duyurularım
        </p>
      </MiddleBanner>

      <Container className="my-5">
        <Row>
          <SearchFilterUI/>
        </Row>
        <Row>
          {notifications.map((notification) => (
            <Col xs={4} key={notification.id}>
              <NotificationCard
                type="Duyuru"
                corpName="İstanbul Kodluyor"
                header={notification.title}
                date="06.01.2024"
                content={
                  <div>
                       <SafeHtmlContent htmlContent={notification.label} />
                  </div>
                }
              />
            </Col>
          ))}
        </Row>
        <Row className="mt-4">
          <Col className="d-flex justify-content-center">
            <Pagination>{items}</Pagination>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MyNotification;
