import PlatformHeader from "../../Components/Layouts/PlatformHeader";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import foto from "../../Assets/Images/user-photo.png";
import { useSelector } from "react-redux";
import { IoEyeOutline } from "react-icons/io5";
import RadarChart from "../../Components/Common/RadarChart";

const Profil = () => {
  const userDetails = useSelector((state) => state.auth.userDetails);
  return (
    <>
      <PlatformHeader />
      <Container className="mt-5">
        <Row className="mt-5">
          {/* Gülüzar */}
          <Col md={4} className="">
            <div>
              <Card className="mb-4">
                <div
                  className="d-flex justify-content-center rounded"
                  style={{ backgroundColor: "#696EDC" }}
                >
                  <Card.Img
                    variant="top"
                    src={foto}
                    style={{ width: "100px" }}
                    className="my-3"
                  />
                </div>
                <Card.Body>
                  <div className="cv-info" style={{ padding: 4 }}>
                    <div className="mb-3">
                      <Row>
                        <Col md={2}>
                          <div className="info-icon-name">
                            <img
                              src="https://tobeto.com/cv-name.svg"
                              style={{ width: "3rem" }}
                            />
                          </div>
                        </Col>
                        <Col md={10}>
                          <p
                            className="text-muted m-0"
                            style={{ fontSize: "0.7rem" }}
                          >
                            Ad Soyad
                          </p>
                          <Card.Text className="fw-bold">
                            {userDetails.firstName + " " + userDetails.lastname}
                          </Card.Text>
                        </Col>
                      </Row>
                    </div>

                    <div className="mb-3">
                      <Row>
                        <Col md={2}>
                          <div className="info-icon-name">
                            <img src="https://tobeto.com/cv-date.svg" 
                            style={{ width: "3rem" }}
                            />
                            
                          </div>
                        </Col>
                        <Col md={10}>
                          <p
                            className="text-muted m-0"
                            style={{ fontSize: "0.7rem" }}
                          >
                            Doğum Tarihi
                          </p>
                          <Card.Text className="fw-bold">
                            {userDetails.birthDate}
                          </Card.Text>
                        </Col>
                      </Row>
                    </div>

                    <div className="mb-3">
                      <Row>
                        <Col md={2}>
                          <div className="info-icon-name">
                            <img src="https://tobeto.com/cv-mail.svg" 
                            style={{ width: "3rem" }}/>
                          </div>
                        </Col>
                        <Col md={10}>
                          <p
                            className="text-muted m-0"
                            style={{ fontSize: "0.7rem" }}
                          >
                            E-Posta Adresi
                          </p>
                          <Card.Text className="fw-bold">
                            {userDetails.email}
                          </Card.Text>
                        </Col>
                      </Row>
                    </div>

                    <div className="mb-3">
                      <Row>
                        <Col md={2}>
                          <div className="info-icon-name">
                            <img src="https://tobeto.com/cv-phone.svg" 
                            style={{ width: "3rem" }}/>
                          </div>
                        </Col>
                        <Col md={10}>
                          <p
                            className="text-muted m-0"
                            style={{ fontSize: "0.7rem" }}
                          >
                            Telefon Numarası
                          </p>
                          <Card.Text className="fw-bold">
                            {userDetails.phoneNumber}
                          </Card.Text>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>

            <div className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>Hakkımda</Card.Title>
                  <hr style={{ color: "purple" }} />
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>Yetkinliklerim</Card.Title>
                  <hr style={{ color: "purple" }} />
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>Yabancı Dillerim</Card.Title>
                  <hr style={{ color: "purple" }} />
                  <Card.Text>{userDetails.userLanguage}</Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>Sertifikalarım</Card.Title>
                  <hr style={{ color: "purple" }} />
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>Medya Hesaplarım</Card.Title>
                  <hr style={{ color: "purple" }} />
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>

          {/* Hasan Can */}
          <Col md={8} className="">
            <Card>
              <Row className="mt-3">
                <Col>
                  <div className="fw-bold fs-5 ms-2">Tobeto İşte Başarı Modelim</div>
                </Col>
                <Col className="d-flex justify-content-end">
                  <div className="fs-5 text-muted me-2">
                    <IoEyeOutline />
                  </div>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col md={6}>
                  <RadarChart />
                </Col>
                <Col md={6}></Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profil;
