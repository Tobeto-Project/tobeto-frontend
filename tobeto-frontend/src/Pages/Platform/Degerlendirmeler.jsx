import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import PlatformHeader from '../../Components/Layouts/PlatformHeader';
import '../../Styles/PagesStyles/PlatformStyle/Degerlendirmeler.css';
import PlatformFooter from '../../Components/Layouts/PlatformFooter';

const Degerlendirmeler = () => {
  const [currentQuiz, setCurrentQuiz] = useState('');
  const [showStartModal, setShowStartModal] = useState(false);
  const [showContinueModal, setShowContinueModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);

  const [quizStates, setQuizStates] = useState({

    'Yetkinlik sınavı': { started: false, completed: false },
    'Front End': { started: false, completed: false },
    'Full Stack': { started: false, completed: false },
    'Back End': { started: false, completed: false },
    'Microsoft SQL Server': { started: false, completed: false },
    ' Masaüstü Programlama': { started: false, completed: false },


    // Diğer sınavlar buraya eklenebilir
  });

  const handleStartQuiz = (quizName) => {
    setCurrentQuiz(quizName);
    setShowStartModal(true);

    // Sınav başlatıldığında state güncellenir
    setQuizStates((prevStates) => ({
      ...prevStates,
      [quizName]: { ...prevStates[quizName], started: true, completed: false },
    }));
  };

  const handleFinishQuiz = () => {
    // Sınavın bitirilmesi durumunda yapılacak işlemler
    setShowContinueModal(false);
    setShowReportModal(true);

    // State güncellenir
    setQuizStates((prevStates) => ({
      ...prevStates,
      [currentQuiz]: { ...prevStates[currentQuiz], completed: true },
    }));
  };

  const handleViewReport = () => {
    console.log('handleViewReport fonksiyonu çalıştı.');
    console.log('currentQuiz:', currentQuiz);
    console.log('isQuizCompleted(currentQuiz):', isQuizCompleted(currentQuiz));

    // Raporu görüntüleme işlemleri buraya eklenir
    setShowInfoModal(true);
  };

  const isQuizCompleted = (quizName) => {
    // Sınav tamamlandı kontrolü burada yapılır
    return quizStates[quizName]?.completed;
  };

  const containerStyle = {
    height: '200px',
    boxShadow: '5px 5px 5px 4px rgba(0, 0, 0, 0.1)', // Box shadow ekledik
    borderRadius: '8px',
    overflow: 'hidden', // İçeriğin taşmasını engellemek için
    marginTop: "15px",
    overflow: 'hidden',
    background: '#DADCE3', // Background color ekledik
    backgroundImage: 'linear-gradient(to right, #DADCE3, #E8D5ED)',

  };

  const gradientBarStyle = {
    content: '""',
    position: 'absolute',
    top: "10px",
    left: "50%",
    width: '20px',
    height: '200px',
    backgroundImage: 'linear-gradient(to bottom, #9638D7, #E8D5ED)', // Çubuğun rengi
    zIndex: '2',
    transform: 'translate(-50%, -20px)',
    opacity: '0.4',
    borderRadius: "7px 7px"

  };

  return (
    <div>
      <PlatformHeader />
      <main>
        <section className="py-5">
          <div className="position-relative mt-12">
            <div className="vector">
              {/* ... SVG ve görsel içeriği buraya ekle ... */}
            </div>
            <Container className="text-center">
              <Row className="mw-5xl mx-auto">
                <Col>
                  <h3>

                    <span className="fw-normal text-info" style={{ fontWeight: 'normal' }}>
                      Yetkinlik
                    </span>
                    <span className="text-secondary" style={{ fontWeight: 'normal' }}>
                      lerini ücretsiz ölç,
                    </span>
                    <span className="fw-normal text-info" style={{ fontWeight: 'normal' }}>
                      Bilgi
                    </span>
                    <span className="text-secondary" style={{ fontWeight: 'normal' }}>
                      lerini test et.
                    </span>
                    {/* ... Diğer yazıları buraya ekle ... */}
                  </h3>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        <section className="mt-8">
          <Container>
            <Row>
              <Col md={12} className="mb-8">
                <Card className="dashboard-card">
                  <Card.Body>
                    <Card.Title className="fw-bold text-white">Tobeto İşte Başarı Modeli</Card.Title>
                    <Card.Text className='mt-5 text-white'>
                      80 soru ile yetkinliklerini <b>ölç,</b> önerilen eğitimleri <b>tamamla,</b> rozetini <b>kazan.</b>
                    </Card.Text>

                    {currentQuiz === 'Yetkinlik sınavı' ? (
                      <Button
                        variant="primary"
                        onClick={() => {

                          isQuizCompleted(currentQuiz) ? handleViewReport() : handleStartQuiz(currentQuiz);
                        }}
                        enabled={quizStates[currentQuiz].started || isQuizCompleted(currentQuiz)}
                      >
                        {isQuizCompleted(currentQuiz) ? 'Raporu Görüntüle' : 'Başla'}
                      </Button>

                    ) : (
                      <Button
                        variant="primary"
                        onClick={() => handleStartQuiz('Yetkinlik sınavı')}
                        disabled={quizStates['Yetkinlik sınavı'].started}
                      >
                        Başla
                      </Button>
                    )}
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card className="dashboard-card1 equal-box">
                  <Card.Body className="text-center text-white">
                    <div className="mb-3">
                      {/* Üstteki içerik */}
                      <Card.Title>Yazılımda Başarı Testi</Card.Title>
                    </div>

                    <div className="mb-3">
                      {/* Ortadaki içerik */}
                      <Card.Text>
                        Çoktan seçmeli sorular ile teknik bilgini <b>test et.</b>
                      </Card.Text>
                    </div>

                    <div>
                      {/* Altta olan içerik */}
                      <label className="text-white">&gt;&gt;&gt;</label>
                    </div>
                  </Card.Body>
                </Card>

              </Col>

              <Col md={6}>
                <div className="d-flex flex-column " style={{ gap: '14px' }}>
                  <Card className="dashboard-card-slim">
                    <Card.Body className="d-flex justify-content-between">
                      <span>Front End</span>
                      <Button
                        className="btn"
                        variant="light"
                        onClick={() => {
                          const quizName = 'Front End';
                          isQuizCompleted(quizName) ? handleViewReport() : handleStartQuiz(quizName);
                        }}
                        enabled={quizStates['Front End']?.started || isQuizCompleted('Front End')}
                      >
                        {isQuizCompleted('Front End') ? 'Raporu Görüntüle' : 'Başla'}
                      </Button>
                    </Card.Body>
                  </Card>

                  <Card className="dashboard-card-slim" style={{ gap: '14px' }}>
                    <Card.Body className="d-flex justify-content-between">
                      <span>Full Stack</span>
                      <Button
                        className="btn"
                        variant="light"
                        onClick={() => {
                          const quizName = 'Full Stack';
                          isQuizCompleted(quizName) ? handleViewReport() : handleStartQuiz(quizName);
                        }}
                        enabled={quizStates['Full Stack']?.started || isQuizCompleted('Full Stack')}
                      >
                        {isQuizCompleted('Full Stack') ? 'Raporu Görüntüle' : 'Başla'}
                      </Button>
                    </Card.Body>
                  </Card>


                  <Card className="dashboard-card-slim">
                    <Card.Body className="d-flex justify-content-between">
                      <span>Back End</span>
                      <Button
                        variant="light"
                        onClick={() => {
                          const quizName = 'Back End';
                          isQuizCompleted(quizName) ? handleViewReport() : handleStartQuiz(quizName);
                        }}
                        enabled={quizStates['Back End']?.started || isQuizCompleted('Back End')}
                      >
                        {isQuizCompleted('Back End') ? 'Raporu Görüntüle' : 'Başla'}
                      </Button>
                    </Card.Body>
                  </Card>


                  <Card className="dashboard-card-slim">
                    <Card.Body className="d-flex justify-content-between">
                      <span>Microsoft SQL Server</span>
                      <Button
                        variant="light"
                        onClick={() => {
                          const quizName = 'Microsoft SQL Server';
                          isQuizCompleted(quizName) ? handleViewReport() : handleStartQuiz(quizName);
                        }}
                        enabled={quizStates['Microsoft SQL Server']?.started || isQuizCompleted('Microsoft SQL Server')}
                      >
                        {isQuizCompleted('Microsoft SQL Server') ? 'Raporu Görüntüle' : 'Başla'}
                      </Button>
                    </Card.Body>
                  </Card>


                  <Card className="dashboard-card-slim">
                    <Card.Body className="d-flex justify-content-between">
                      <span>Masaüstü Programlama</span>
                      <Button
                        variant="light"
                        onClick={() => {
                          const quizName = 'Masaüstü Programlama';
                          isQuizCompleted(quizName) ? handleViewReport() : handleStartQuiz(quizName);
                        }}
                        enabled={quizStates['Masaüstü Programlama']?.started || isQuizCompleted('Masaüstü Programlama')}
                      >
                        {isQuizCompleted('Masaüstü Programlama') ? 'Raporu Görüntüle' : 'Başla'}
                      </Button>
                    </Card.Body>
                  </Card>

                </div>
              </Col>

            </Row>


            <Row className="justify-content-center mt-3">
              <Col sm={12} style={containerStyle} className="p-0">
                <div className="position-relative">
                  <div className="gradient-line3 mt-5"></div>
                  <div className="container text-center">
                    <div style={{  }} className="mw-5xl mx-auto">
                      <p style={{  width: "100%" }}>
                        <span className="text-secondary fw-bold " style={{ fontSize: "30px"}}>
                          Aboneliğe özel
                        </span>
                        <span className="fw-normal text-info" style={{ fontSize: "30px" }}>
                          değerlendirme araçları için
                        </span>
                      </p>
                    </div>
                  </div>
                  <div style={gradientBarStyle}></div>
                </div>
              </Col>
            </Row>

            <Row className='mb-5 mt-5 text-center text-white'>
              <Col md={6}>

                <div className="dashboard-card4 equal-box">
                  <span className="centered-text mt-4">Kazanım Odaklı Testler</span>
                  <p className="centered-text mt-5">
                    Dijital gelişim kategorisindeki eğitimlere başlamadan önce konuyla ilgili bilgin ölçülür ve seviyene göre yönlendirilirsin.
                  </p>
                </div>
              </Col>
              <Col md={6} className="d-flex align-items-center">
                <div className="dashboard-card4 equal-box">
                  <span className="centered-text mt-4 align-items-center">Huawei Talent Interview <br /> Teknik Bilgi Sınavı*</span>
                  <p className="centered-text mt-4 align-items-center">
                    <b><i>Sertifika alabilmen için,</i></b> eğitim yolculuğunun sonunda teknik yetkinliklerin ve kod bilgin ölçülür.<br /><br />
                    4400+ soru | 30+ programlama dili <br />
                    4 zorluk seviyesi
                  </p>
                  <small className="text-white">*Türkiye Ar-Ge Merkezi tarafından tasarlanmıştır.</small>
                </div>
              </Col>
            </Row>



          </Container>
          <PlatformFooter />
        </section>

        {/* Diğer kodlar... */}
      </main>

      {/* Modallar */}
      <Modal show={showStartModal} onHide={() => setShowStartModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Sınav Başlat</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Sınav başlatma içeriği...</p>
          <Button variant="primary" onClick={() => { setShowStartModal(false); setShowContinueModal(true); }}>
            Şimdi Başlat
          </Button>
        </Modal.Body>
      </Modal>

      <Modal show={showContinueModal} onHide={() => setShowContinueModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Sınav Devam Ediyor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Sınav devam etme içeriği...</p>
          <Button variant="primary" onClick={handleFinishQuiz}>
            Sınavı Bitir
          </Button>
        </Modal.Body>
      </Modal>

      <Modal show={showReportModal} onHide={() => setShowReportModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Rapor Görüntüle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Raporu görüntüleme içeriği...</p>
          <Button variant="primary" onClick={handleViewReport}>
            Raporu Görüntüle
          </Button>
        </Modal.Body>
      </Modal>
      <Modal show={showInfoModal} onHide={() => setShowInfoModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Sınav Bilgisi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>  <p>
            {isQuizCompleted(currentQuiz) && 'Sınavınız tamamlandı : notunuz:   .'}
          </p></p>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowInfoModal(false)}>
            Kapat
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Degerlendirmeler;