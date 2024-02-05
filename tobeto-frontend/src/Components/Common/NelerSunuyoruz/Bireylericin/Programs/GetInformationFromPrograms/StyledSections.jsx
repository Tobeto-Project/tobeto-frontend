import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { gradientBarStyleBottomToTop, gradientBarStyleTopToBottom } from '../../../../../../Pages/BizKimiz';


const StyledSections = () => {
    return (
        <Container>
            <Row>
                <div style={{ ...gradientBarStyleTopToBottom, margin: "auto" }} >

                </div>
            </Row>
            <Row className='text-center'>
                <div className="mw-5xl mx-auto position-relative">
                    <p style={{
                        fontSize: '1.5em',
                        border: '2px solid #93f',
                        padding: '8px 16px',
                        borderRadius: '12px',
                        margin: '1em 0 2em 0',
                        color: '#fff',
                    }}>
                        Bize her zaman <a style={{ fontWeight: 600, color: '#fff' }} href="mailto:bilgial@tobeto.com">bilgial@tobeto.com</a> adresinden ulaşabilirsin.
                    </p>
                </div>
            </Row>
            <Row>
                <div style={{ ...gradientBarStyleBottomToTop, margin: "auto" }} >

                </div>
            </Row>
            <span className=" text-center mt-3" style={{ fontSize: "1.2rem !important", fontWeight: "400", display:"block" }}><b>Kişisel</b> ve <b>profesyonel</b> gelişimin için Tobeto topluluğuna dahil ol.</span>
        </Container>
    );
};

export default StyledSections;
