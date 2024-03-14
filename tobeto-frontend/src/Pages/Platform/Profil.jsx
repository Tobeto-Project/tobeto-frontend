import PlatformHeader from "../../Components/Layouts/PlatformHeader";
import { Button, Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import foto from "../../Assets/Images/user-photo.png";
import { useSelector } from "react-redux";
import { IoEyeOutline } from "react-icons/io5";
import RadarChart from "../../Components/Common/RadarChart";
import { TfiWorld } from "react-icons/tfi";
import '../../Styles/PagesStyles/PlatformStyle/Profil.css';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import { fetchCertificatesList } from "../../Services/certificateService"
import { useEffect, useState } from "react";
import socialMediaService from "../../Services/socialmediaService";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub, FaDribbble, FaBehance } from 'react-icons/fa'; //sosyal media ikonu import et

const Profil = () => {
  const userDetails = useSelector((state) => state.auth.userDetails);
  const [certificatesList, setCertificatesList] = useState([]);
  const [userSocials, setUserSocials] = useState([]);

  const socialMediaIcons = {
    instagram: FaInstagram,
    twitter: FaTwitter,
    linkedin: FaLinkedin,
    github: FaGithub,
    dribble: FaDribbble,
    behance: FaBehance
    // Diğer sosyal medya türleri ve ikonları varsa önce PlatformMediaAccounts içinde 'react-icons/fa'dan import edilicek sonra getSocialMediaIcon fonksiyonuna eklenicek, daha sonra burada import edilip , socialMediaIcons'a eklenicek
  };


  const radarChartData = [
    [5, 4, 2.5, 5, 4, 4.5, 5, 4],

  ];

  const radarChartLabels = [
    'Yeni Dünyaya Hazırlanıyorum',
    'Profesyonel duruşumu geliştiriyorum',
    'Kendimi tanıyor ve yönetiyorum',
    'Yaratıcı ve doğru çözümler geliştiriyorum',
    'Başkaları ile birlikte çalışıyorum',
    'Kendimi sürekli geliştiriyorum',
    'Sonuç ve başarı odaklıyım',
    'Anlıyorum ve anlaşılıyorum',
  ];




  const userId = useSelector(state => state.auth.userDetails.id);

  useEffect(() => {
    const fetchData = async () => {
      await fetchCertificates(userId);
      await fetchUserSocials(userId);
    };

    fetchData();
  }, [userId]);

  const handleDownload = (certificateUrl) => {
    window.open(certificateUrl, '_blank');
  };

  const fetchCertificates = async (userId) => {
    try {
      console.log("Fetching certificates for user with ID:", userId);
      const certificates = await fetchCertificatesList(userId);
      console.log("certificates", certificates)
      setCertificatesList(certificates);
    } catch (error) {
      console.error('Error fetching certificates list:', error);
    }
  };

  const fetchUserSocials = async (userId) => {
    try {
      const response = await socialMediaService.getUserSocialsByUserId(userId);
      console.log("responseeee", response)
      setUserSocials(response.items);
    } catch (error) {
      console.error('Hata:', error);
    }
  };


  return (
    <>
      <PlatformHeader />
      <Container className="mt-5" style={{ minHeight: 100 }}>
        <div className="d-flex justify-content-end">
          <span className="cv-edit-icon"><img src="https://tobeto.com/edit2.svg" />  <a href=""></a> </span>
          <button className="btn"><img src="https://tobeto.com/share.svg" /></button>
        </div>

        <Row className="mt-5">
          {/* Gülüzar */}
          <Col md={4}>
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
                              style={{ width: "3rem" }} />
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
                              style={{ width: "3rem" }} />
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
                  <Card.Text>
                    Henüz bir yetkinlik eklemedin.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>Yabancı Dillerim</Card.Title>
                  <hr style={{ color: "purple" }} />
                  <Card.Text>
                    <div className="mylanguage w-100" style={{ padding: 5 }}>
                      <Row>
                        <Col md={2}>
                          <TfiWorld />
                        </Col>
                        <Col md={8}>
                          <div className="d-flex flex-column">
                            <span style={{ fontSize: "15px", color: "#828282" }}>Dil  {userDetails.userLanguage}</span>
                            <span style={{ fontSize: "12px", color: "#828282CC" }}> Seviye </span>
                          </div>
                        </Col>
                        <Col md={2}>
                          <img src="https://tobeto.com/home.svg" />
                        </Col>
                      </Row>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>Sertifikalarım</Card.Title>
                  <hr style={{ color: 'purple' }} />
                  <Card.Text>
                    {certificatesList.length > 0 ? (
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        {certificatesList.map((certificate, index) => (
                          <li key={index} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                            <span style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', marginRight: '10px', maxWidth: '200px' }}>{certificate.fileName}</span>
                            <button onClick={() => handleDownload(certificate.fileUrl)} style={{ border: 'none', background: 'none', cursor: 'pointer', padding: 0 }}>
                              <img src="https://tobeto.com/pdf.png" alt="PDF icon" style={{ width: '20px', height: '20px' }} />
                            </button>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>Henüz bir sertifika yüklemedin.</p>
                    )}
                  </Card.Text>

                </Card.Body>
              </Card>
            </div>

            <div className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>Medya Hesaplarım</Card.Title>
                  <hr style={{ color: "purple" }} />
                  <Card.Text>
                    {console.log("userSocials:", userSocials)}
                    {userSocials.length > 0 ? (
                      <ul style={{ listStyle: "none", padding: 0 }}>
                        {userSocials.map((social, index) => {
                          const Icon = socialMediaIcons[social.socialMediaName];
                          return (
                            <li key={index} style={{ marginBottom: "10px" }}>
                              <a href={social.link} target="_blank" rel="noopener noreferrer">
                                {Icon && <Icon style={{ marginRight: "5px" }} />}
                                {social.link}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    ) : (
                      <p>Henüz bir hesap eklemedin.</p>
                    )}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>


          </Col>

          {/* Hasan Can */}
          <Col md={8} className="">
            <Card>
              <Container>
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

                    {radarChartData.map((data, index) => (
                      <div key={index} className="mb-4">
                        <Card>
                          <Card.Body>
                            <RadarChart dataSets={[data]} labels={radarChartLabels} />
                          </Card.Body>
                        </Card>
                      </div>
                    ))}
                  </Col>
                  <Col md={6}>
                    <div className="radar-labels">
                      {radarChartData.map((data, dataIndex) => (
                        <div key={dataIndex}>
                          {data.map((point, pointIndex) => (
                            <Row key={pointIndex}>
                              <Col md={2}>
                                <span className={`legend legend${pointIndex + 1}`}>{` ${point}`}</span>
                              </Col>
                              <Col md={10}>
                                <span className="chart-text ">{radarChartLabels[pointIndex]}</span>
                              </Col>
                            </Row>
                          ))}
                        </div>
                      ))}</div>

                  </Col>
                </Row>
              </Container>
            </Card>
            <br />

            <Card>
              <Container>
                <Row className="mt-3">
                  <div className="fw-bold fs-5 ms-2">Tobeto Seviye Testlerim</div>
                </Row>
                <hr />
                <Row className="g-4 mb-3">
                  <Col>
                    <Card>
                      <div className="envantory-result">
                        <div className="d-flex justify-content-between w-100">
                          <span className="examName">Front-End</span>
                          <span className="examDate">10-10-2023</span>
                        </div>
                        <span>75.00</span>
                      </div>
                    </Card>
                  </Col>
                  <Col>
                    <Card>
                      <div className="envantory-result">
                        <div className="d-flex justify-content-between w-100">
                          <span className="examName">Exam Name</span>
                          <span className="examDate">Tarih</span>
                        </div>
                        <span>Sınav sonucu</span>
                      </div>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </Card>

            <br />
            <Card>
              <Container>
                <Row className="mt-3">
                  <div className="fw-bold fs-5 ms-2">Yetkinlik Rozetlerim</div>
                </Row>
                <hr />
                <Row className="ms-4 mb-3">

                  <Col md={2}><Card className="badge-card"><img className="img-fluid" src="https://tobeto.s3.cloud.ngn.com.tr/45_5c7f1d6053.jpg" alt="" /></Card></Col>
                  <Col md={2}><Card className="badge-card"><img className="img-fluid" src="https://tobeto.s3.cloud.ngn.com.tr/47_1acec549a9.jpg" alt="" /></Card></Col>
                  <Col md={2}><Card className="badge-card"><img className="img-fluid" src="https://tobeto.s3.cloud.ngn.com.tr/50_2e8fe5a50a.jpg" alt="" /></Card></Col>
                  <Col md={2}><Card className="badge-card"><img className="img-fluid" src="https://tobeto.s3.cloud.ngn.com.tr/53_dbd6006382.jpg" alt="" /> </Card></Col>
                  <Col md={2}><Card className="badge-card"><img className="img-fluid" src="https://tobeto.s3.cloud.ngn.com.tr/54_c578f4d035.jpg" alt="" /></Card></Col>
                  <Col md={2}><Card className="badge-card"><img className="img-fluid" src="https://tobeto.s3.cloud.ngn.com.tr/55_ea5a81e3e2.jpg" alt="" /></Card></Col>

                </Row>
              </Container>
            </Card>

            <br />
            <Card>
              <Container>
                <Row className="mt-3">
                  <div className="fw-bold fs-5 ms-2">Aktivite Haritam</div>
                </Row>
                <hr />
                <Row className="pb-3">
                  <Container>
                    <img className="github" src="http://ghchart.rshah.org/guluzarkarakoc" style={{ width: '100%', height: '100%' }} />
                  </Container>

                </Row>
              </Container>
            </Card>

            <br />
            <Card>
              <Container className="mb-5">
                <Row className="mt-3">
                  <div className="fw-bold fs-5 ms-2">Eğitim Hayatım ve Deneyimlerim</div>
                </Row>
                <hr />
                <Row>
                  <div typeof="text">Henüz bir eğitim ve deneyim bilgisi eklemedin.</div>
                </Row>
              </Container>
            </Card>

          </Col>
        </Row>



      </Container>
    </>
  );
};

export default Profil;
