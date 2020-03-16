import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Container, Row } from 'reactstrap'; 
import logo from '../images/royalcode-logo.svg';
import Service from './common/Service';
import {selectOption} from '../actions/selectOption';

class FormServices extends Component {

  listAllItems() {
    return this.props.services.map((item) => {
      return (
        <Service 
          key={item.id} 
          serviceName={item.title}
        >
          <div 
            onClick={() => this.props.selectOption(item)}
          >
            {item.icon}
          </div>
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
  return {
    global: state.global, 
    services: state.services
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    selectOption: selectOption
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(FormServices);
