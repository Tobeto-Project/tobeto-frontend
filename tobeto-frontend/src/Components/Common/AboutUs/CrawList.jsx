import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const CrawList = () => {
    const crawData = [
        {
            name: 'Ahmet Hançer',
            title: ' CEO',
            company: 'Enocta',
            imageSrc:
                'https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fahmet-hancer.13d6bd2f.png&w=1920&q=75',
            linkedinUrl: 'https://www.linkedin.com/in/ahmethancer/',
        },
        {
            name: 'Dr. Ecmel Ayral',
            title: ' Kurucu',
            company: 'Unlearn Academy',
            imageSrc:
                'https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fecmel-ayral.9114c7af.png&w=1920&q=75',
            linkedinUrl: 'https://www.linkedin.com/in/ahmethancer/',
        },
        {
            name: 'Cem Atacık',
            title: ' CEO',
            company: 'Kampüs365 & Perculus',
            imageSrc:
                'https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcem-atacik.29af3d5b.png&w=1920&q=75',
            linkedinUrl: 'https://www.linkedin.com/in/ahmethancer/',
        },
        {
            name: 'Mehmet Gürsoy',
            title: 'Kurucu',
            company: 'Ledd',
            imageSrc:
                'https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmehmet-gursoy.7a0af94d.png&w=1920&q=75',
            linkedinUrl: 'https://www.linkedin.com/in/ahmethancer/',
        },
        {
            name: 'Alpaslan Gürsoy',
            title: 'Yönetim Kurulu Üyesi',
            company: 'Lidya Ventures',
            imageSrc:
                'https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Falparslan.ad11a534.png&w=1920&q=75',
            linkedinUrl: 'https://www.linkedin.com/in/ahmethancer/',
        }

    ];

    return (
        <Container style={{ marginTop: '20px' }}>
            <Row className='justify-content-center'>
                {crawData.map((item, index) => (
                    <Col key={index} xs={5} sm={6} md={3} lg={2} style={{ textAlign: 'center', margin: '0px' }} className="mx-1 mb-md-4">
                        <div style={{ width: '100%', height: '150px', overflow: 'hidden', borderRadius: '10px', margin: '0 auto 10px', border: '4px solid #A628FF' }}>
                            <a target="_blank" href={item.linkedinUrl}>
                                <img
                                    src={item.imageSrc}
                                    alt={item.name}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '6px', filter: 'grayscale(100%)' }}
                                />
                            </a>
                        </div>
                        <span style={{ display: 'block', fontSize: '16px', marginBottom: '5px', fontWeight: 'bold' }}>
                            {item.name}
                        </span>
                        <span style={{ display: 'block', fontSize: '16px', color: '#888' }}>
                            {item.title}
                        </span>
                        <span style={{ display: 'block', fontSize: '16px', color: '#888' }}>
                            {item.company}
                        </span>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default CrawList;
