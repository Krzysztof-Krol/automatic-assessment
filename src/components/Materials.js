import React from 'react';
import { Container, Row, Col } from 'reactstrap'; 

const Materials = () => {
    return (
      <Container>
        <Row>
          <Col sm="12" md={{ size: 8, offset: 2  }} lg={{ size: 8, offset: 2 }}>
            <p className="small">Jeśli posiadasz materiały potrzebne do stworzenia strony (teksty, zdjęcia lub logo) możemy szybciej zacząć,
    a co za tym idzie szybciej skończyć pracę nad stroną internetową.</p>
          </Col>
        </Row>
        <Row>
          <Col >
            Mam wszystkie materiały  
          </Col>
          <Col >
            Będę dosyłał materiały w trakcie realizacji
          </Col>
        </Row>
      </Container>
    );
  }
  export default Materials;