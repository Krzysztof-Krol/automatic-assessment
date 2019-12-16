import React from 'react';
import { Container, Row, Col } from 'reactstrap'; 
import WebIcon from '@material-ui/icons/Web';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SpeedIcon from '@material-ui/icons/Speed';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import BuildIcon from '@material-ui/icons/Build';
import AppsIcon from '@material-ui/icons/Apps';
import CodeIcon from '@material-ui/icons/Code';

const Service = (props) => {
  return (
    <Col sm="12" md="6" xl="3">
      {props.children}
      <p>{props.serviceName}</p>
    </Col>
  );
}

const Services = () => {
  return (
    <Container className="has-icons mb-5">
      <p className="small mb-5">
        Wybierz temat, który Cię interesuje.
      </p>
      <Row className="d-flex flex-row justify-content-center">
        <Service serviceName="Strona internetowa">
          <WebIcon />
        </Service>
        <Service serviceName="Sklep internetowy">
          <StorefrontIcon />
        </Service>
        <Service serviceName="Optymalizacja SEO">
          <SpeedIcon />
        </Service>
        <Service serviceName="Pozycjonowanie">
          <TrendingUpIcon />
        </Service>
        <Service serviceName="Naprawa strony">
          <BuildIcon />
        </Service>
        <Service serviceName="Aplikacja internetowa">
          <AppsIcon />
        </Service>
        <Service serviceName="Inne zlecenie">
          <CodeIcon />
        </Service>
      </Row>
    </Container>
  );
}
export default Services;
  