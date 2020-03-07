import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap'; 
import Item from './common/Item';
import {connect} from 'react-redux';

class FormShopProject extends Component {

    listAllItems() {
        return this.props.project.map((item) => {
            return (
            <Item 
                key={item.id} 
            >
                <div>{item.icon}</div>
                <p className="mb-2">{item.title}</p>
                <p className="my-1 price">{item.price > 0 ? item.price+" zł" : ""}</p>
                <p className="item-desc">{item.desc}</p>
                <strong className="small">{item.discount ? item.discountTitle : null}</strong>
            </Item>
            );
        })
    } 
  
  render(){
    return (
        <Container className="has-icons mb-5">
            <Row>
                <Col xs="12" sm="12" md="12" lg={{offset: 1, size: 10}} className="mx-auto">
                    <h2 className="mb-3">Zaawansowanie witryny</h2>
                    <p className="description mb-3">Tworzę produkt dostosowany do Ciebie, Twojej firmy lub marki, który będzie prezentacją Twojej jakości. Dzięki temu taki projekt wymaga indywidualnego dopasowania części wizualnej. Wybierz z poniższych opcji tę, która najbardziej spełnia Twoje potrzeby i wyrazi Twój profesjonalizm.</p>
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
    project: state.shopProject,
  }
}

export default connect(mapStateToProps)(FormShopProject);
