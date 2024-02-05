import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ProgramInfo = () => {
    return (
        <Container className='mt-5 ' >
            <Row>
                <Col md={12} className="pt-8 pb-8 bg-dark-light">
                    <Container className='mt-5 '>
                        <Row>
                            <Col>
                                <h4 className="text-white fw-bold">Eğitim Hakkında</h4>
                                <p className="text-white mb-8">
                                    Dünyada ve ülkemizde yeni teknolojiler üretebilecek nitelikte iş gücünün önemi her geçen gün
                                    artmakta. Yazılımcı ihtiyacı ise tüm sektörler için inanılmaz bir boyuta gelmiş durumda.
                                    Uygulama ağırlıklı, son teknolojileri barındıran yazılım eğitimlerimizi genç nesille
                                    tanıştırmak, Türkiye'de ve dünyada geçerli yazılımcılar olabilmelerinin önünü açmayı
                                    hedefliyoruz.
                                </p>                         
                                <h4 className="text-white fw-bold">Eğitim Başlangıç Tarihleri</h4>
                                <p className="f-size-18 c-white">Şubat 2023</p>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
};

export default ProgramInfo;
