import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function FeaturesSecond() {
    const colHeight = '300px'; // Tüm kolonların yüksekliği
    const [hovered, setHovered] = useState(null);

    const handleMouseEnter = (index) => {
        setHovered(index);
    };

    const handleMouseLeave = () => {
        setHovered(null);
    };
    return (
        <Container style={{ padding: '20px' }}>
            <Row>
                {/* İlk Kolon */}
                <Col md={6} className="mb-4">
                    <div
                        className={`d-flex flex-column align-items-center justify-content-center text-center`}
                        style={{
                            height: colHeight,
                            position: 'relative',
                            padding: '20px',
                            borderRadius: '20px',
                            border: '1px solid white',
                        }}
                    >
                        <h1 className='mb-5' style={{ opacity: '0.7', fontSize: "1.7rem" }}>
                            Çalışanlarınız için Tobeto
                        </h1>
                        <p style={{ marginBottom: '10px' }}>
                            Çalışanların ihtiyaçları doğrultusunda, mevcut becerilerini güncellemelerine veya yeni beceriler kazanmalarına destek olur.
                        </p>
                    </div>
                </Col>





                {/* İkinci Kolon */}
                <Col md={6} className="mb-4">
                    <Row className="no-gutters" style={{ margin: 0 }}>
                        {/* İkinci Kolonun İlk Parçası */}
                        <Col md={4}>
                            <div
                                className={`d-flex flex-column align-items-center justify-content-center ${hovered === 1 ? 'hovered' : ''
                                    }`}
                                onMouseEnter={() => handleMouseEnter(1)}
                                onMouseLeave={handleMouseLeave}
                                style={{
                                    position: 'relative',
                                    padding: '20px',
                                    borderRadius: '10px',
                                    height: colHeight,
                                    backgroundColor: hovered === 1 ? '#800080' : '#808080',
                                }}
                            >
                                <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg"
                                    style={{ display: hovered === 1 ? 'none' : 'block' }}>


                                    <circle cx="25" cy="25" r="20" stroke="white" strokeWidth="3" fill="none" />
                                </svg>
                                {hovered === 1 ? (
                                    <p style={{ fontSize: '0.7em' }}>
                                        Uzmanlaşmak için yeni beceriler kazanmak (reskill) veya yeni bir role başlamak (upskill) isteyen adaylar için, teknik ve yetkinlik ölçme araçları.
                                    </p>
                                ) : (
                                    <p style={{ marginTop: '10px', fontSize: '1em' }}>Değerlendirme</p>
                                )}
                                <span style={{ position: 'absolute', bottom: '10px', color: 'white', fontSize: '2em' }}>
                                    {hovered === 1 ? 'x' : '>'}
                                </span>
                            </div>
                        </Col>

                        {/* İkinci Kolonun İkinci Parçası */}
                        <Col md={4}>
                            <div
                                className={`d-flex flex-column align-items-center justify-content-center ${hovered === 2 ? 'hovered' : ''
                                    }`}
                                onMouseEnter={() => handleMouseEnter(2)}
                                onMouseLeave={handleMouseLeave}
                                style={{
                                    position: 'relative',
                                    padding: '20px',
                                    borderRadius: '10px',
                                    height: colHeight,
                                    backgroundColor: hovered === 2 ? '#404080' : '#404040',
                                }}
                            >
                                <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg"
                                    style={{ display: hovered === 2 ? 'none' : 'block' }}
                                >
                                    <rect width="50" height="50" style={{ fill: 'white' }} />
                                </svg>
                                {hovered === 2 ? (
                                    <p style={{ fontSize: '0.7em' }}>
                                        Yeni uzmanlık becerileri ve yeni bir rol için gerekli yetkinlik kazınımı ihtiyaçlarına bağlı olarak açılan eğitimlere katılım ve kuruma özel sınıf açma olanakları.
                                    </p>
                                ) : (
                                    <p style={{ marginTop: '10px', fontSize: '1em' }}>Bootcamp</p>
                                )}
                                <span style={{ position: 'absolute', bottom: '10px', color: 'white', fontSize: '2em' }}>
                                    {hovered === 2 ? 'x' : '>'}
                                </span>
                            </div>
                        </Col>

                        {/* İkinci Kolonun Üçüncü Parçası */}
                        <Col md={4}>
                            <div
                                className={`d-flex flex-column align-items-center justify-content-center ${hovered === 3 ? 'hovered' : ''
                                    }`}
                                onMouseEnter={() => handleMouseEnter(3)}
                                onMouseLeave={handleMouseLeave}
                                style={{
                                    position: 'relative',
                                    borderRadius: '10px',
                                    height: colHeight,
                                    backgroundColor: hovered === 3 ? '#1a1a80' : '#1a1a1a',
                                }}
                            >
                                <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg"
                                    style={{ display: hovered === 3 ? 'none' : 'block' }}
                                >
                                    <line x1="0" y1="0" x2="50" y2="50" stroke="white" strokeWidth="3" />
                                    <line x1="50" y1="0" x2="0" y2="50" stroke="white" strokeWidth="3" />
                                </svg>
                                {hovered === 3 ? (
                                    <p style={{ fontSize: '0.7em', textAlign: 'center', margin: '10px' }}>
                                        Kurumsal hedefler doğrultusunda mevcut yetenek gücünün gelişimi ve konumlandırılmasına destek.
                                    </p>
                                ) : (
                                    <p style={{ marginTop: '10px', fontSize: '1em' }}>Eşleştirme</p>
                                )}
                                <span style={{ position: 'absolute', bottom: '10px', color: 'white', fontSize: '2em' }}>
                                    {hovered === 3 ? 'x' : '>'}
                                </span>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default FeaturesSecond