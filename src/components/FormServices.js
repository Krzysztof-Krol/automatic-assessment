import React, {Component, useState} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Container, Row } from 'reactstrap'; 
import logo from '../images/royalcode-logo.svg';
import Service from './common/Service';
import { selectOption } from '../actions/selectOption';
import WebIcon from '@material-ui/icons/Web';
import StorefrontIcon from '@material-ui/icons/Storefront';
import CodeIcon from '@material-ui/icons/Code';

const services = [
    {
        id: 43,
        checked: false,
        name: 'website',
        category: 'formServices',
        title: 'Strona internetowa',
        icon: <WebIcon />
    },
    {
        id: 795,
        checked: false,
        name: 'shop',
        category: 'formServices',
        title: 'Sklep internetowy',
        icon: <StorefrontIcon />
    },
    {
        id: 31,
        checked: false,
        name: 'other',
        category: 'formServices',
        title: 'Inne zlecenie',
        icon: <CodeIcon />
    }        
]

const FormServices = ({options}) => {  
    const [selectedId, setSelectedId] = useState(0);

    return (
      <Container className="has-icons mb-5">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="mb-3">Natychmiastowa wycena usług programistycznych</h1>
        <p className="small mb-3">
          Wybierz temat, który Cię interesuje.
        </p>
        <Row className="d-flex flex-row justify-content-center">
                {
                    services.map((item) => {
                        return (
                            <Service
                                className={item.id === selectedId ? "selected" : ""}
                                checked={item.checked}
                                key={item.id}
                                serviceName={item.title}
                            >
                                <div
                                onClick={() => {
                                   setSelectedId(item.id)}
                                
                                   }>
                                    {item.icon}
                                </div>
                            </Service>
                        );
                    })
                }
        </Row>
      </Container>
    );
}


function mapStateToProps(state){
  return {
    options: state.options
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    selectOption: selectOption
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(FormServices);
