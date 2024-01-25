import { Container, Row, Col } from 'react-bootstrap';

const FeatureList = () => {
    const iconPath = 'https://tobeto.com/_next/static/media/tobeto-tag-purple.e3e78d87.svg';


    const features = [
        'Codecademy ile uluslararası geçerliliğe sahip sertifika fırsatı',
        'Abonelik modeliyle eğitime erişim',
        'Çeşitlendirilmiş değerlendirme araçlarıyla gelişim alanlarını tanıma',
        'Fark yaratan bir gelişim süreci',
        'Mesleki eğitimlerin yanı sıra kişisel ve profesyonel gelişim imkanı',
        'Alanında uzman eğitmenlerle canlı dersler',
        'Mentör desteği',
        'Online ve canlı derslerle hibrit yaklaşım',
        'Zengin eğitim kütüphanesi',
    ];

    return (
        <Container>
            <div className="bg-gradient-gray text-center">
                <Row className="justify-content-center">
                    <Col md={8}>
                        <span className="d-block" style={{ fontWeight: 'bold', fontSize: '24px', marginBottom: '20px' }}>
                            Tobeto farkı;
                        </span>
                        <ul style={{ padding: '0', listStyle: 'none', textAlign: 'left', marginLeft: '0', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        
                            {features.map((feature, index) => (
                                <li key={index} style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                                    <img src={iconPath} alt={`Fark ${index + 1}`} style={{ width: '50px', height: '30px', marginRight: '10px' }} />
                                    <span style={{ fontSize: '18px' }}>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default FeatureList;
