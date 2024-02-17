import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

const SearchComponent = () => {
  return (
    <Container
      className="text-center mx-5 w-50"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.24)",
        padding: "50px",
        borderRadius: "30px",
      }}
    >
      <h2 className="text-light fs-1">Öğrenmeye Başla!</h2>
      <Row className="mt-4 justify-content-center ">
        <Col md="11">
          <InputGroup>
            <FormControl
              className="rounded-pill pr-5"
              placeholder="Eğitim arayın"
              aria-label="Eğitim arayın"
            />
            <InputGroup.Text
              className="position-absolute end-0 me-3 border-0"
              style={{ zIndex: 1000, pointerEvents: "none" }}
            >
              <BsSearch /> 
            </InputGroup.Text>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchComponent;
