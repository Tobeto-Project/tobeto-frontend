// NotificationCard.jsx

import React, { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import "../../Styles/CommonStyles/NotificationCard.css"
import { SlCalender } from "react-icons/sl";
import CustomModal from "./CustomModal"

const NotificationCard = ({ type, corpName, header, date, content }) => {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
    return (
        <Card className={`my-2 mx-3 notify ${type === "Duyuru" ? "duyuru" : ""}`}>
            <Card.Body>
                <div className="d-flex flex-column">
                    <div className="d-flex justify-content-between mb-2">
                        <span className="type">{type}</span>
                        <span className="corp-names type">{corpName}</span>
                    </div>
                    <span className="header">{header}</span>
                </div>
                <div className="d-flex justify-content-between mt-4 text-muted">
                    <span style={{ fontSize: "small" }} className="date">
                        <SlCalender style={{ marginRight: "10px", marginBottom: "5px", font: "small-caption" }} />
                        {date}
                    </span>
                    <span style={{ fontSize: "small", cursor: "pointer" }} className="read-more" onClick={handleShowModal}>
                        Devamını Oku
                    </span>
                </div>
            </Card.Body>
            <CustomModal
                show={showModal}
                handleClose={handleCloseModal}
                title={header}
                content={content}

            />
        </Card>



    );
};

const NotificationContainer = () => {
    return (
        <div className="notification-container ">

            <NotificationCard className="card-height"
                type="Duyuru"
                corpName="İstanbul Kodluyor"
                header="Ocak Ayı Tercih Formu Bilgilendirmesi"
                date="  06.01.2024"
                content={<div>

                    <p>Tercih formunu bekleyen adaylarımızın discorddaki duyuruyu takip etmesini rica ederiz.



                        Formu ulaşanların bugün saat 18.00'e kadar tercih formunu göndermeleri gerekmektedir.



                        Form ulaşmayan kişiler discord üzerinden gerekli bilgilendirmeyi ekibe ulaştırabilir.



                        Sevgiler,</p>
                </div>}
            />
            <NotificationCard
                type="Duyuru"
                corpName="İstanbul Kodluyor"
                header="11 Ocak Kampüs Buluşması"
                date={"03.01.2024"}
                content={<div>

                    <p>Herkes için Kodlama eğitimini bitiren kişilerin katılabileceği kampüs buluşmamız 11 Ocak 2024 tarihindedir. Discorddan form paylaşılmıştır. Bu katılım formunu doldurmayan arkadaşların doldurması önemlidir.



                        Not: Henüz eğitime hiç başlamamış adayların buluşması, eğitimlerini bitirdikten sonra 20 Şubat 2024 tarihinde yapılacaktır.



                        Sevgiler,</p>
                </div>}
            

            />
            <NotificationCard
                type="Duyuru"
                corpName="İstanbul Kodluyor"
                header="30 Ocak Online Hoşgeldin Buluşması-5"
                date="07.12.2023"
                content={<div>

                    <p>Sevgili İstanbul Kodluyor'lu,

                        30 Ocak salı günü saat 11.00'de aramıza yeni katılan adaylar ile online olarak bir araya geleceğimiz için heyecanlıyız.



                        İlk etapta tüm süreci birlikte konuşup, neler yapmanız gerektiğini adım adım anlatacağız. "Eğitimlerim" bölümündeki size tanımlanmış videoları izleyebilirsiniz. "Eğitime Git" butonuna tıklayarak online oturumların saatini ve içeriğini görebilirsiniz. Online oturumlara saati geldiğinde ilgili yerden tıklayarak katılabilirsiniz. Ayrıca bir mail gönderilmeyecektir. Hoşgeldin Buluşması-5 etkinliğine katılımınızı bekliyoruz. Platformu takip etmek adayların sorumluluğundadır.



                        Not: Eğer "Eğitimlerim" bölümünde size atanmış Hoşgeldin Buluşması- 5 başlığını görmüyorsanız, 29 Ocak pazartesiye kadar beklemenizi rica ederiz. 29 Ocak günü hala göremiyorsanız istanbulkodluyor@tobeto.com adresine mail atabilirsiniz.



                        Sevgiler

                        TOBETO | İstanbulKodluyor</p>
                </div>}
           
                
            />
        </div>
    );
};

export default NotificationContainer;


