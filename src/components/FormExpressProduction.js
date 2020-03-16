import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap'; 
import Item from './common/Item';
import {connect} from 'react-redux';

class FormExpressProduction extends Component {

    listAllItems() {
        return this.props.languages.map((item) => {
            return (
                <Item 
                    key={item.id}
                >
                    <div>{item.icon}</div>
                    <p className="mb-2">{item.title}</p>
                    <p className="my-3 price">{item.price > 0 ? item.price + " zł" : null}</p>
                    <p className="item-desc">{item.desc ? item.desc : null}</p>
                    <strong className="small">{item.discount ? item.discountTitle : null}</strong>
                    <strong className="small">{item.multiple ? item.multipleTitle : null}</strong>
                </Item>
            );
        })
    } 
  
    render(){
        return (
            <Container className="has-icons mb-5">
                <Row>
                    <Col xs="12" sm="12" md="12" lg={{offset: 1, size: 10}} className="mx-auto">
                        <h2 className="mb-3">Ekspresowa produkcja</h2>
                        <p className="description mb-3">Domyślny czas realizacji zlecenia to miesiąc. Jeśli potrzebujesz takiej opcji, mogę uznać Twoje zlecenie za priorytet i skrócić czas realizacji o połowę.</p>
                    </Col>
                </Row>
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
    languages: state.expressProduction,
  }
}

export default connect(mapStateToProps)(FormExpressProduction);
