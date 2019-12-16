import React from 'react';
import logo from './royalcode-logo.svg';
import './App.css';
import { Container, Row, Col } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Koszt strony internetowej</h1>
        <p>
          Wybierz usługę, która Cię interesuje.
        </p>
        <KindOfWork />
        <Materials />
      </header>
    </div>
  );
}
export default App;

const KindOfWork = () => {
  return (
    <Container>
    <Row>
      <Col sm="12" md="6" lg="3">
          <p>Strona internetowa</p>
      </Col>
      <Col sm="12" md="6" xl="3">
        <p>Sklep internetowy</p>
      </Col>
      <Col sm="12" md="6" xl="3">
        <p>Optymalizacja SEO</p>
      </Col>
      <Col sm="12" md="6" xl="3">
        <p>Pozycjonowanie</p>
      </Col>
      <Col sm="12" md="6" xl="3">
        <p>Naprawa strony</p>
      </Col>
      <Col sm="12" md="6" xl="3">
        <p>Aplikacja internetowa</p>
      </Col>
      <Col sm="12" md="6" xl="3">
        <p>Inne zlecenie</p>
      </Col>
    </Row>
  </Container>
  );
}

const Materials = () => {
  return (
    <Container>
      <Row>
        <p>Jeśli posiadasz materiały potrzebne do stworzenia strony (teksty, zdjęcia lub logo) możemy szybciej zacząć,
  a co za tym idzie szybciej skończyć pracę nad stroną internetową.</p>
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