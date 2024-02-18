import React from "react";
import Banner from "../Components/Layouts/Banner";
import Header from "../Components/Layouts/Header";
import Footer from "../Components/Layouts/Footer";
import { Col, Container, Row, Image } from 'react-bootstrap';
import CrawList from "../Components/Common/AboutUs/CrawList";
import Team from "../Components/Common/AboutUs/Team";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import FeatureList from "../Components/Common/AboutUs/FeatureList";
import CalendarButton from "../Components/Common/CalendarButton";

const iconPath = 'https://tobeto.com/_next/static/media/tobeto-tag-purple.e3e78d87.svg';
const videoUrl = 'https://s3.cloud.ngn.com.tr/tobeto/tobeto_final_v2_5c7893fbe0.mp4';
const logoUrl = 'https://tobeto.com/_next/static/media/tbtLogo.3fb5d7fd.svg';

export const gradientBarStyleTopToBottom = {
  content: '""',
  width: '15px',
  height: '200px',
  backgroundImage: 'linear-gradient(to bottom, rgba(150, 56, 215, 1), rgba(232, 213, 237, 0))',
  zIndex: '2',
  borderRadius: '7px 7px'
};

export const gradientBarStyleBottomToTop = {
  ...gradientBarStyleTopToBottom,
  backgroundImage: 'linear-gradient(to top, rgba(150, 56, 215, 1), rgba(232, 213, 237, 0))'
};



const BizKimiz = () => {
  return (
    <div className="pages-content">
      <Banner />
      <Header />
      <CalendarButton/>
      <div className="position-relative main-content">
        <Container >
          <Row >
            <Col md={5} xs={12} className=" d-flex justify-content-between mt-5">
              <div className="flex-col">
             
                <img src={logoUrl} alt="Tobeto Logo" style={{ width: '200px', height: '200px' }} />
              </div>
              <div className="flex-col">
                <p className="aboutus-text">Tobeto, <br />"headhunting" yaklaşımını <br /><span style={{ color: 'rgb(153, 51, 255)' }}>"headfarming"</span> olarak değiştirmeyi <br />hedefleyen, eğitim ve gelişim odaklı <br />dijital bir platformdur</p>
                <p className="aboutus-text"></p>
              </div>
            </Col>
            <Col md={5} xs={12} className="my-10 d-flex mt-5">
           
              <video width="100%" className="modal-height youtube-video img-fluid" controls>
                <source src={videoUrl} type="video/mp4" />
                <source src="movie.ogg" type="video/ogg" />
              </video>
            </Col>
          </Row>
        </Container>
        <Container className="mt-5">
          <Row>
            <Col>
              <p className="about-paragraph">Geleceğin mesleklerindeki yetenek açığını, geleneksel "headhunting" yaklaşımının "<b>headfarming</b>" olarak değişmesiyle çözülebileceğine inanarak yola çıktık.</p>
              <p className="about-paragraph">Tobeto, "headfarming" yaklaşımıyla yeteneği potansiyel olarak değerlendirir, en kıymetli olacağı alanda yetiştirir, değer yaratacağı projeler ve kurumlarla eşleştirir. Bu fırsata <b>Y.E.S. (Yetiş-Eşleş-Sürdür)</b> diyen herkesi Tobeto’lu olmaya çağırıyoruz.</p>
              <p className="about-paragraph">Günümüzde iş bulmak, bir projeye dahil olmak veya kariyerinde yükselmek gibi değer yaratma yolları için en önemli unsurların başında <b>dijital beceri</b> sahibi olmak geliyor. Tam da bu ihtiyaçları kapsamak üzere, Tobeto'da eğitim içeriklerimizi hem dijital beceri sahibi olmak isteyen yeteneklerin teknik beceri kazanması hem de genç profesyonellerin, ihtiyaçlarına uygun olarak yenilenmeleri ve yetkinliklerini geliştirmelerini kapsayacak şekilde tek platformda birleştirdik.</p>
              <p className="about-paragraph">Tobeto’da <b>hem bireylere hem de kurumlara</b> hizmet eden yapımızla, doğru yetenekle doğru pozisyonun sürdürülebilir bir şekilde eşleşmesine ve birlikte gelişmelerine alan açıyoruz. Kurum içi çözümlere destek veriyor, eğitim ve istihdam arasında köprü görevini üstleniyoruz.</p>
            </Col>
          </Row>
        </Container>

        <FeatureList />

        <Row className="mt-10">
          <Col>
            <span className="d-block align-center mt-5 mb-5 text-center" style={{
              fontWeight: "bold",
              fontSize: '32px',
              backgroundImage: 'linear-gradient(to bottom, #315EFD, #7D2DCD)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              width: '100%',
              margin: '0 auto'
            }}>
              Tobeto ile işe hazırlan, işe yerleş, işinde geliş, yüksel!
            </span>

          </Col>
        </Row>

        <Row>
          <div style={gradientBarStyleTopToBottom} className='mx-auto mt-5'></div>
        </Row>


        <span className="d-block align-center mt-5 mb-5 text-center" style={{ fontWeight: "bold", fontSize: '24px' }}>
          Ekibimiz
        </span>

        <Team />


        <span className="d-block align-center mt-5 mb-7 text-center" style={{ fontWeight: "bold", fontSize: '24px' }}>
          Danışma Kurulu
        </span>

        <CrawList />

        <Row>
          <div style={gradientBarStyleBottomToTop} className='mx-auto mt-5'></div>
        </Row>

        <Container fluid className="mt-5">
          <Row className="about-banner" style={{ background: '#36184F', padding: '30px' }}>
            <Col md={{ span: 8, offset: 2 }} style={{ textAlign: 'center', color: '#fff' }}>
              <span className="mb-5 d-block" style={{ fontWeight: 600, fontSize: '24px' }}>
                Ofisimiz
              </span>
              <span className="address">
                Kavacık, Rüzgarlıbahçe Mah. Çampınarı Sok. No:4 Smart Plaza B Blok Kat:3 34805, Beykoz,İstanbul
              </span>
            </Col>
          </Row>
        </Container>

        <Container fluid>
          <Row className="followus-banner" style={{ padding: '40px' }}>
            <Col md={{ span: 8, offset: 2 }} className="text-center">
              <span className="mb-4 d-block " style={{ fontWeight: 600, fontSize: '24px', color: '#fff' }}>
                Bizi Takip Edin
              </span>
              <div className="col-12 col-lg-auto text-center">
                <a className="text-decoration-none me-4" href="https://www.facebook.com/tobetoplatform" target="_blank">
                  <FontAwesomeIcon icon={faFacebook} style={{ color: '#9826E7', fontSize: '24px' }} />
                </a>
                <a className="text-decoration-none me-4" href="https://www.instagram.com/tobeto_official/" target="_blank">
                  <FontAwesomeIcon icon={faInstagram} style={{ color: '#9826E7', fontSize: '24px' }} />
                </a>
                <a className="text-decoration-none me-4" href="https://twitter.com/tobeto_platform" target="_blank">
                  <FontAwesomeIcon icon={faTwitter} style={{ color: '#9826E7', fontSize: '24px' }} />
                </a>
                <a className="text-decoration-none" href="https://www.linkedin.com/company/tobeto/" target="_blank">
                  <FontAwesomeIcon icon={faLinkedin} style={{ color: '#9826E7', fontSize: '24px' }} />
                </a>
              </div>
            </Col>
          </Row>
        </Container>

      </div>
      <Footer />
    </div>

  );
};

export default BizKimiz;











