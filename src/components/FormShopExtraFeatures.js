import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap'; 
import Switch from './common/Switch';
import {connect} from 'react-redux';

class FormShopExtraFeatures extends Component {

    listAllItems() {
        return this.props.features.map((item) => {
            return (
                <Switch 
                    key={item.id}
                    title={item.title}
                >
                    <p className="my-3 price">{item.price > 0 ? item.price + " zł" : "ZA DARMO"}</p>
                    <p className="item-desc">{item.desc ? item.desc : null}</p>
                </Switch>
            );
        })
    }

    render(){
        return (
            <Container className="has-icons mb-5">
                <Row>
                    <Col xs="12" sm="12" md="12" lg={{offset: 1, size: 10}} className="mx-auto">
                        <h2 className="mb-3">Dodatkowe funkcjonalności</h2>
                        <p className="description mb-3">Aby rozszerzyć działanie swojego sklepu internetowego możesz wybrać dodatkowe funkcjonalności. Dzięki temu sklep internetowy będzie dopasowany do Twoich potrzeb i wymagań użytkowników.</p>
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
        features: state.shopExtraFeatures,
    }
}

export default connect(mapStateToProps)(FormShopExtraFeatures);
