import React, { useState } from 'react';
import { Row, Col, InputGroup, FormControl, Dropdown, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSearch } from 'react-icons/fa';

function SearchFilterUI() {
    const [tur, setTur] = useState('');
    const [siralama, setSiralama] = useState('');
  
    return (
      <div>
        <Row>
          <Col md={12} lg={6}>
            <InputGroup className="mb-3">
              <FormControl
                  placeholder="Arama"
                  aria-label="Arama"
                  className="rounded-pill pe-5 px-5"
              />
              <InputGroup.Text className="position-absolute border-0" style={{right: '10px', zIndex: '1000'}}>
                  <FaSearch />
              </InputGroup.Text>
            </InputGroup>
          </Col>
          <Col md={12} lg={2}>
            <Dropdown className='mb-3 w-100'>
              <Dropdown.Toggle variant="secondary" className='rounded-pill w-100 text-black bg-white shadow fw-bold border-secondary' style={{border:"solid 0.01rem"}}>
                Tür
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Form.Check
                  type="radio"
                  id="haber-radio"
                  label="Haber"
                  name="tur"
                  checked={tur === 'haber'}
                  onChange={() => setTur('haber')}
                  className="dropdown-item"
                />
                <Form.Check
                  type="radio"
                  id="duyuru-radio"
                  label="Duyuru"
                  name="tur"
                  checked={tur === 'duyuru'}
                  onChange={() => setTur('duyuru')}
                  className="dropdown-item"
                />
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col md={12} lg={2}>
            <Dropdown className='mb-3 w-100'>
              <Dropdown.Toggle variant="secondary" className='rounded-pill w-100 text-black bg-white shadow fw-bold border-secondary' style={{border:"solid 0.01rem"}}>
                Organizasyon
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="1">İstanbul Kodluyor</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col md={12} lg={2}>
            <Dropdown className='mb-3 w-100'>
              <Dropdown.Toggle variant="secondary" className='rounded-pill w-100 text-black bg-white shadow fw-bold border-secondary' style={{border:"solid 0.01rem"}}>
                Sıralama
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item 
                  eventKey="1" 
                  active={siralama === 'Tarihe Göre (Y-E)'}
                  onClick={() => setSiralama('Tarihe Göre (Y-E)')}
                >
                  Tarihe Göre (Y-E)
                </Dropdown.Item>
                <Dropdown.Item 
                  eventKey="2"
                  active={siralama === 'Tarihe Göre (E-Y)'}
                  onClick={() => setSiralama('Tarihe Göre (E-Y)')}
                >
                  Tarihe Göre (E-Y)
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </div>
    );
  }

export default SearchFilterUI;
