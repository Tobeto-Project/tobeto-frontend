import React from "react";
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import "../../Styles/LayoutStyles/FooterStyle.css";

const Footer = () => {
  return (
    <MDBFooter bgColor="dark" className="text-center text-lg-left">
      <hr />
      <MDBContainer className="p-4">
        <MDBRow>
          <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
            <h5 className="text-white fw-bold">Site Haritası</h5>

            <ul className="list-unstyled mb-0">
              <li>
                <a className=" text-white">Hakkımızda</a>
              </li>
              <li>
                <a className="text-white">Bireyler İçin</a>
              </li>
              <li>
                <a className="text-white">Kurumlar İçin</a>
              </li>
              <li>
                <a className="text-white">S.S.S.</a>
              </li>
              <li>
                <a className="text-white">İletişim</a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
            <h5 className="text-white fw-bold">Kaynaklar</h5>

            <ul className="list-unstyled mb-0">
              <li>
                <a className="text-white">Üyelik Sözleşmesi ve Kullanım Koşulları</a>
              </li>
              <li>
                <a className="text-white">KVKK Aydınlatma Metni</a>
              </li>
              <li>
                <a className="text-white">İlgili Kişi Başvuru Formu</a>
              </li>
              <li>
                <a className="text-white">Çerez Politikası</a>
              </li>
              <li>
                <a className="text-white">Cayma Formu</a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
            <h5 className="text-white fw-bold">Eğitim Yolculukları</h5>

            <ul className="list-unstyled mb-0">
              <li>
                <a className="text-white">Front End</a>
              </li>
              <li>
                <a className="text-white">Full Stack</a>
              </li>
              <li>
                <a className="text-white">Web & Mobile</a>
              </li>
              <li>
                <a className="text-white">Veri Bilimi</a>
              </li>
              <li>
                <a className="text-white">Siber Güvenlik</a>
              </li>
              <li>
                <a className="text-white">UI / UX</a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
            <h5 className="text-white fw-bold">Blog</h5>

            <ul className="list-unstyled mb-0">
              <li>
                <a className="text-white">Web API Nedir? Programlama Yazılımının Arayüzü Nasıl Çalışır?</a>
              </li>
              <li>
                <a className="text-white">Yapay Zeka Chatbot: İşte Geleceğin İletişim Aracı!</a>
              </li>
              <li>
                <a className="text-white">Yazılım Test Otomasyonu: İş Akışınızı Daha Verimli Hale Getirin!</a>
              </li>
              <li>
                <a className="text-white">Node.js Nedir ve Nasıl Kullanılır? İşte Sana Basit ve Etkili Kılavuz</a>
              </li>
              <li>
                <a className="text-white">Robotlar ve Yapay Zeka İçin Hangi Yazılım Dili Kullanılır?</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className="text-center p-3">
        <br />
        <hr />
        <p>© 2022 Tobeto I Her Hakkı Saklıdır</p>
      </div>
    </MDBFooter>
  );
};

export default Footer;
