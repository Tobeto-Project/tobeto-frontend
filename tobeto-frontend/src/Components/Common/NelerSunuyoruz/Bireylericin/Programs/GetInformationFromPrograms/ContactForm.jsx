import React from 'react';
import { Col, Container, Form, Button } from 'react-bootstrap';
import { FaPaperPlane, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const topicOptions = [
    'Front End Developer',
    'Back End Developer',
    'Full Stack Developer',
    'Web & Mobile Developer',
    'Veri Bilimi Uzmanı',
    'Siber Güvenlik Uzmanı',
    'UI / UX Developer',
];

const GetInformationForm = () => {
    return (
        <div className="w-100 outline-bg mb-5 mobil-p-20">
            <Container>
                <div className="row">
                    {/* İletişim Formu */}
                    <Col xs={12} lg={8} className="mb-4 mt-5">
                        <form data-hs-cf-bound="true">
                            <div className="getContactForm">
                                <div className="d-flex flex-column" style={{ gap: '1em' }}>
                                    <span style={{ fontSize: '1.75em', fontWeight: 500 }}>
                                        Bilgi almak için ilgilendiğin konuyu seç, bize e-posta adresini bırak.
                                    </span>
                                    <select name="Topic" className="form-select" aria-label="Default select example">
                                        <option value="" selected="">
                                            İlgilendiğin alanı seç.
                                        </option>
                                        {topicOptions.map((topic, index) => (
                                            <option key={index} value={topic}>
                                                {topic}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="d-flex" style={{ gap: '7px' }}>
                                        <input name="Email" className="form-control tobeto-input" type="text" placeholder="E-Posta Adresi" style={{ height: '80%' }} />
                                        <Button disabled className="btn btn-primary send-icon my-0" style={{ width: 'auto' }}>
                                            <FaPaperPlane />
                                        </Button>
                                    </div>
                                    <label className="d-flex mt-5 text-start">
                                        <small className="w-90">
                                            Kişisel verileriniz{' '}
                                            <a target="_blank" href="/yasal-metinler/kvkk-aydinlatma-metni">
                                                Aydınlatma Metni
                                            </a>{' '}
                                            kapsamında işlenmektedir.
                                        </small>
                                    </label>
                                    <label className="d-flex mt-5 text-start">
                                        <small className="w-90">
                                            <input name="identityCheck" className="form-check-input me-2" type="checkbox" />
                                            Kimlik, iletişim, müşteri işlem verilerimin pazarlama süreçlerinizin gerçekleştirilmesi ve yönetimi amacı ile
                                            altyapı hizmeti aldığınız yurt dışında mukim Active Campaign (LLC)'ye aktarılmasını kabul ediyorum.
                                        </small>
                                    </label>
                                    <small>
                                        Avez Elektronik İletişim Eğitim Danışmanlığı Ticaret A.Ş. (“Tobeto”) tarafından şahsımla iletişime geçilerek
                                        pazarlama, tanıtım ve duyurulardan aşağıdaki iletişim bilgileri üzerinden irtibata geçilmesini kabul ediyorum.
                                        <label className="d-flex mt-1 text-start mt-4">
                                            <input name="emailCheck" className="form-check-input me-2" type="checkbox" />
                                            <small>E-posta gönderim izni.</small>
                                        </label>
                                    </small>
                                </div>
                            </div>
                        </form>
                    </Col>

                    {/* Bizi Takip Et ve Sosyal Medya İkonları */}
                    <Col xs={12} lg={4} className="d-flex flex-column align-items-center mt-5 mb-4">
                        {/* Bizi Takip Et */}
                        <h4 className="text-white fw-bold">Bizi takip et</h4>

                        {/* Sosyal Medya İkonları */}
                        <div className="socials d-flex flex-column mt-4">
                            <a href="https://www.facebook.com/tobetoplatform" target="_blank" className="text-decoration-none mb-3">
                                <FaFacebook size={34} />
                            </a>
                            <a href="https://www.instagram.com/tobeto_official/" target="_blank" className="text-decoration-none mb-3">
                                <FaInstagram size={34} />
                            </a>
                            <a href="https://twitter.com/tobeto_platform" target="_blank" className="text-decoration-none mb-3">
                                <FaTwitter size={34} />
                            </a>
                            <a href="https://www.linkedin.com/company/tobeto/" target="_blank" className="text-decoration-none mb-3">
                                <FaLinkedin size={34} />
                            </a>
                        </div>
                    </Col>

                </div>
            </Container>
        </div>
    );
};

export default GetInformationForm;
