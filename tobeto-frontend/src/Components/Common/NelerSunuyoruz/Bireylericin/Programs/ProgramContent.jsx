import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

const ProgramContent = () => {
    const data = [
        {
            category: 'Temel Web Programlama',
            topics: ['HTML', 'CSS', 'JavaScript Temel'],
        },
        {
            category: 'İleri Web Programlama',
            topics: ['JavaScript İleri', 'Bootstrap', 'Farklı Veri Formatları ve Türleri ile Çalışma (XML/JSON)', 'Chrome Web Developer Tools'],
        },
        {
            category: 'Araçların Kullanımı',
            topics: ['Visual Studio Code Temel Özellikleri', 'Git ile Versiyon Kontrolü ve Kod Deposu Yönetimi', 'API Kavramı ve Mock Servis Yazımı', 'Postman'],
        },
        {
            category: 'React Front End Programlama',
            topics: ['React JS Giriş', 'React JS Kurulum', 'JSX', 'Render Kavramı', 'Adım Adım İlk React Projesi', 'Bileşenler (Components)', 'Props', 'Durum Yönetimi (State Management)', 'Formlar ve Data Binding', 'Koşullar, Döngüler ve Diziler (Arrays)', 'Axios', 'Yaygınlaştırma (Deployment)'],
        },
        {
            category: 'Veritabanı Temel Eğitimi',
            topics: ['Veritabanı Temel Eğitimi', 'Veri Türleri', 'Tablolar', 'İlişkiler', 'Temel Veritabanı Tasarım İlkeleri', 'İlişkisel Veritabanı Mimarisi', 'Veri Sorgulama Dili (T-SQL) - DML (SELECT, INSERT, UPDATE, DELETE)'],
        },
        {
            category: 'Örnek Projeler',
            topics: ['Baştan sona veri yapısı, ekran görünümleri, servis ihtiyaçları ve versiyon kontrolü ile bütün bir proje geliştirme'],
        },
    ];

    return (
        <Container className="mt-5">
            <h3 className="mb-6 mx-2 text-white fw-bold">Eğitim İçeriği</h3>
            <Row>
                {data.map((item, index) => (
                    <Col key={index} xs={12} lg={6} className='mb-5 '>
                        <div className=" p-4 h-100 border-dark" style={{ backgroundColor: "#4D4D4D", width: "95%",  borderRadius: "20px" }}>
                            <h5 className="fw-normal text-white mb-4 ">{item.category}</h5>
                            <ul className="text-white ">
                                {item.topics.map((topic, i) => (
                                    <li key={i} className="list-styled ">
                                        {topic}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ProgramContent;
