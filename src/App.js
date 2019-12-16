import React from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap'; 

import service from './content'


function App() {
  return (
    <div className="App">
      <header className="App-header d-flex align-items-center">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="mb-3">Koszt strony internetowej</h1>
        <p className="small mb-5">
          Wybierz usługę, która Cię interesuje.
        </p>
        <KindOfWork />
        {/* <Materials /> */}
      </header>
    </div>
  );
}
export default App;


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