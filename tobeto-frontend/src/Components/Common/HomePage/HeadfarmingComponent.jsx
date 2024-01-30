import React from "react";
import { Container } from "react-bootstrap";

const HeadfarmingComponent = () => {
    return (
        <Container
            className="headfarming my-10 mt-5 bg-dark"
            style={{
                maxWidth: "950px",
                margin: "0 auto",
                height: "140px",
                padding: "20px",
                borderRadius: "30px",
             
                color: "white",
                border: "2px solid purple", // Mor renkli border eklendi
            }}
        >
            <p className="h6 text-center mt-2">
                Tobeto, 20. yy''ın “headhunting” yaklaşımını “headfarming” olarak değiştirmeyi hedefler!
                <br />
                <br />
                Headfarming: Genç yetenekleri, sürekli öğrenme hevesi içinde olan profesyonelleri, 360 derece eğitmek, değerlendirmek, yönlendirmek ve desteklemektir.
            </p>
        </Container>
    );
};

export default HeadfarmingComponent;
