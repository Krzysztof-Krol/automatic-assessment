import React, {useState} from 'react';
import { Container, Row, Col } from 'reactstrap'; 
import logo from '../images/royalcode-logo.svg'
import WebIcon from '@material-ui/icons/Web';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SpeedIcon from '@material-ui/icons/Speed';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import BuildIcon from '@material-ui/icons/Build';
import AppsIcon from '@material-ui/icons/Apps';
import CodeIcon from '@material-ui/icons/Code';
import Switch from '@material-ui/core/Switch';

const Service = (props) => {
  return (
    <Col xs="12" sm="6" md="4" xl="3">
      {props.children}
      <p>{props.serviceName}</p>
    </Col>
  );
}





const FormServices = () => {
  const [services, setServices] = useState([
    {
      name: 'website',
      title: 'Strona internetowa',
      icon: {WebIcon}
    },
    {
      name: 'shop',
      title: 'Sklep internetowy',
      icon: {StorefrontIcon}
    }
  ]);
  return (
    <Container className="has-icons mb-5">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="mb-3">Wycena usług programistycznych</h1>
      <p className="small mb-5">
        Wybierz temat, który Cię interesuje.
      </p>
      <Row className="d-flex flex-row justify-content-center">

        {/* {
          services.map(service => (
            <Col xs="12" sm="6" md="4" xl="3">
              {service.icon}
              {service.title}
            </Col>
          ))
        } */}

        <Service serviceName="Strona internetowa">
          <WebIcon />
        </Service>

        <Service 
          serviceName="Sklep internetowy"
        >
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

export default FormServices;
