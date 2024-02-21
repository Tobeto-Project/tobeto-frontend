import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Team = () => {
    const teamData = [
        {
            name: 'Elif Kılıç Tuğtan',
            title: 'Genel Direktör',
            imageSrc: 'https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Felif-kilic.ba3177e2.png&w=1920&q=75',
            linkedinUrl: 'https://www.linkedin.com/in/eliftugtan/'
        },
        {
            name: 'Kader Yavuz',
            title: 'Eğitim ve Proje Koordinatörü',
            imageSrc: 'https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkader-yavuz.659fb664.png&w=1920&q=75',
            linkedinUrl: 'https://www.linkedin.com/in/kader-yavuz/'
        },
        {
            name: 'Pelin Batır',
            title: 'İş Geliştirme Yöneticisi',
            imageSrc: 'https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpelin-batir.3e558dda.png&w=3840&q=75',
            linkedinUrl: 'SOSYAL_MEDYA_LİNKİ_BURAYA'
        },
        {
            name: 'Gürkan İlişen',
            title: 'Eğitim Teknolojileri ve Platform Sorumlusu',
            imageSrc: 'https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgurkanilisen.caf74ca3.png&w=1920&q=75',
            linkedinUrl: 'https://www.linkedin.com/in/g%C3%BCrkan-ili%C5%9Fen/'
        },
        {
            name: 'İsmail Erden',
            title: 'Yazılım Geliştirme Müdürü',
            imageSrc: 'https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fismail-erden.569a29be.png&w=1920&q=75',
            linkedinUrl: 'https://www.linkedin.com/in/ismail-erden-78a49361/'
        },
        {
            name: 'Ahmet Selim Ergin',
            title: ' Yazılım Geliştirici',
            imageSrc: 'https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fselimergin.f1d7d9ad.png&w=1920&q=75',
            linkedinUrl: 'https://www.linkedin.com/in/selimergin/'
        },
        {
            name: 'Doğukan Bektaş',
            title: 'Yazılım Geliştirici',
            imageSrc: 'https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdogukan.ebef6ec9.png&w=1920&q=75',
            linkedinUrl: 'https://www.linkedin.com/in/do%C4%9Fukan-bekta%C5%9F-1877b920a/',
        },
    ];

    return (
        <Container style={{ marginTop: '20px' }}>
            <Row className='justify-content-center'  >
                {teamData.slice(0, 4).map((item, index) => (
                    <Col key={index} md={2} style={{ textAlign: 'center', margin: '25px' }}>
                        <div style={{ position: 'relative', width: '150px', height: '150px', overflow: 'hidden', margin: '0 auto 10px', border: '4px solid #A628FF', borderRadius: '10px' }}>
                            <a target="_blank" rel="noopener noreferrer" href={item.linkedinUrl}>
                                <img
                                    src={item.imageSrc}
                                    alt={item.name}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)' }}
                                />
                            </a>
                        </div>
                        <span style={{ display: 'block', fontSize: '16px', marginBottom: '5px', fontWeight: 'bold' }}>
                            {item.name}
                        </span>
                        <span style={{ display: 'block', fontSize: '16px', color: '#888' }}>
                            {item.title}
                        </span>
                    </Col>
                ))}
            </Row>
            <Row className='justify-content-center'>
                {teamData.slice(4, 7).map((item, index) => (
                    <Col key={index} md={2} style={{ textAlign: 'center', margin: '25px' }}>
                        <div style={{ position: 'relative', width: '150px', height: '150px', overflow: 'hidden', margin: '0 auto 10px', border: '4px solid #A628FF', borderRadius: '10px' }}>
                            <a target="_blank" rel="noopener noreferrer" href={item.linkedinUrl}>
                                <img
                                    src={item.imageSrc}
                                    alt={item.name}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)' }}
                                />
                            </a>
                        </div>
                        <span style={{ display: 'block', fontSize: '16px', marginBottom: '5px', fontWeight: 'bold' }}>
                            {item.name}
                        </span>
                        <span style={{ display: 'block', fontSize: '16px', color: '#888' }}>
                            {item.title}
                        </span>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Team;
