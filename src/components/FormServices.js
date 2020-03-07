import React, {Component} from 'react';
import { Container, Row } from 'reactstrap'; 
import logo from '../images/royalcode-logo.svg'
import Service from './common/Service';
import {connect} from 'react-redux';

class FormServices extends Component {

  listAllItems() {
    return this.props.services.map((item) => {
      return (
        <Service 
          key={item.id} 
          serviceName={item.title}
        >
          {item.icon}
        </Service>
      );
    })
  }
  
  render(){
    return (
      <Container className="has-icons mb-5">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="mb-3">Natychmiastowa wycena usług programistycznych</h1>
        <p className="small mb-3">
          Wybierz temat, który Cię interesuje.
        </p>
        <Row className="d-flex flex-row justify-content-center">
          {this.listAllItems()}
        </Row>
      </Container>
    );
  }
}

function mapStateToProps(state){
  return{
    global: state.global, 
    services: state.services
  }
}

export default connect(mapStateToProps)(FormServices);
