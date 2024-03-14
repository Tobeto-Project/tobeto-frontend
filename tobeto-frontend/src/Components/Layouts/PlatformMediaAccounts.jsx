import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Container, Form, Row, Col, Button, Toast } from "react-bootstrap"; // Toast eklendi
import socialMediaService from '../../Services/socialmediaService';
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub, FaBehance, FaDribbble } from 'react-icons/fa';

const PlatformMediaAccounts = () => {
    const [selectedSocialMedia, setSelectedSocialMedia] = useState(null);
    const [username, setUsername] = useState("");
    const [socialMediaList, setSocialMediaList] = useState([]);
    const [userSocials, setUserSocials] = useState([]);
    const [showToast, setShowToast] = useState(false); // Toast state'i , input içi toast bildirimi kullanıldı toast elemet kodları en aşağıda bulunuyor
    const userId = useSelector(state => state.auth.userDetails.id);

    useEffect(() => {
        async function fetchData() {  // iki response için asenkron executer fonksiyon gerekiyor, düzgün çalışıyor
            try {
                // Kullanıcının mevcut sosyal medya hesaplarını getir
                const socialMediaResponse = await socialMediaService.getSocialMedias(0, 25);  //paginate değeri elle verildi
                setSocialMediaList(socialMediaResponse.items);

                // Kullanıcının mevcut sosyal medya hesaplarını getir
                const userSocialResponse = await socialMediaService.getUserSocialsByUserId(userId);
                setUserSocials(userSocialResponse.items);
            } catch (error) {
                console.error('Hata:', error);
            }
        }

        fetchData(); // İlk render'da çağrılacak

    }, [userId]); // userId bağımlılığı her iki response'da

    const handleSocialMediaChange = (event) => {
        setSelectedSocialMedia(event.target.value);
        setUsername("");
    };

    const getPlaceholder = () => {
        const selectedMedia = socialMediaList.find(media => media.id === selectedSocialMedia);
        return selectedMedia ? `https://${selectedMedia.name}.com/` : "https://";
    };

    const handleChangeUsername = (event) => {
        setUsername(event.target.value);
    };

    const fetchUserSocials = async () => {
        try {
            const response = await socialMediaService.getUserSocialsByUserId(userId);
            setUserSocials(response.items);
        } catch (error) {
            console.error('Hata:', error);
        }
    };

    const handleAddButtonClick = async () => {
        try {
            // Kullanıcının mevcut sosyal medya hesaplarının sayısı kontrolü
            if (userSocials.length >= 3) {
                setShowToast(true); // Toast'u göster
                return;
            }

            // Seçilen sosyal medya seçeneğini find metoduyla al
            const selectedMedia = socialMediaList.find(media => media.id === selectedSocialMedia);
            if (!selectedMedia) {
                console.error('Hata: Seçilen sosyal medya bulunamadı.');
                return;
            }

            // URL'yi oluşturma ve seçilen sosyal medya adı ile birleştirme
            const socialMediaUrl = `https://${selectedMedia.name}.com/${username}`;

            // Veriyi gönder
            await socialMediaService.addUserSocial(userId, selectedSocialMedia, socialMediaUrl);
            console.log('Başarıyla eklendi.');
            // Ekleme işleminden sonra sosyal medya hesaplarını yeniden al
            fetchUserSocials();
        } catch (error) {
            console.error('Hata:', error);
        }
    };


    const handleDeleteButtonClick = async (socialId) => {
        try {
            await socialMediaService.deleteUserSocial(socialId);
            console.log('Başarıyla silindi.');
            // Silme işleminden sonra sosyal medya hesaplarını yeniden al
            fetchUserSocials();
        } catch (error) {
            console.error('Hata:', error);
        }
    };

    const getSocialMediaIcon = (socialMediaLink) => {
        if (!socialMediaLink) return null;

        try {
            const socialMediaName = new URL(socialMediaLink).hostname.toLowerCase();

            switch (socialMediaName) {
                case 'instagram.com':
                    return <FaInstagram />;
                case 'twitter.com':
                    return <FaTwitter />;
                case 'linkedin.com':
                    return <FaLinkedin />;
                case 'github.com':
                    return <FaGithub />;
                case 'behance.com':
                    return <FaBehance />
                case 'dribble.com': 
                    return <FaDribbble/>        
                default:
                    return null;
            }
        } catch (error) {
            console.error('Hata:', error.message);
            return null;
        }
    };

    return (
        <div>
            <Container>
                <Form>
                    <Row>
                        <Col md={3}>
                            <Form.Group controlId="formSocialMedia">
                                <Form.Label className='mb-0'>Medya Hesabı</Form.Label>
                                <Form.Select name='SocialMedia' required onChange={handleSocialMediaChange}>
                                    <option value="0">Seçiniz*</option>
                                    {socialMediaList.map(media => (
                                        <option key={media.id} value={media.id}>{media.name}</option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col md={7}>
                            <Form.Group controlId="formUrl">
                                <Form.Label className='mb-0'>Url</Form.Label>
                                <div className="input-group">
                                    <span className="input-group-text">{getPlaceholder()}</span>
                                    <Form.Control type="text" placeholder="Kullanıcı Adı" value={username} onChange={handleChangeUsername} />
                                </div>
                            </Form.Group>
                        </Col>
                        <Col md={2} className="d-flex align-items-end">
                            <Button variant="primary" onClick={handleAddButtonClick}>Ekle</Button>
                        </Col>
                    </Row>
                </Form>
                <Row>
                    <Col>
                        <h2 className='mt-5'>Kullanıcı Sosyal Medya Hesapları</h2>
                        {userSocials.map(social => (
                            <Row key={social.id} className="mb-2">
                                <Col>
                                    {getSocialMediaIcon(social.link)} {/* İkon burada bulunuyor*/}
                                    {social.link} {/* Link görüntüleme */}
                                </Col>
                                <Col className="d-flex justify-content-end">
                                    <Button variant="danger" onClick={() => handleDeleteButtonClick(social.id)}>Sil</Button>
                                </Col>
                            </Row>
                        ))}
                    </Col>

                </Row>
            </Container>
            {/* Toast bileşeni */}
            <Toast show={showToast} onClose={() => setShowToast(false)} style={{ position: 'absolute', top: 20, right: 20 }}>
                <Toast.Header>
                    <strong className="me-auto">Uyarı</strong>
                </Toast.Header>
                <Toast.Body>En fazla üç sosyal medya hesabı ekleyebilirsiniz!</Toast.Body>
            </Toast>
        </div>
    )
}

export default PlatformMediaAccounts;
