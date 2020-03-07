import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap'; 
import Switch from './common/Switch';
import {connect} from 'react-redux';

class FormTechServices extends Component {

    listAllItems() {
        return this.props.features.map((item) => {
            return (
                <Switch 
                    key={item.id}
                    title={item.title}
                >
                    <p className="my-1 mt-3 price">{item.price > 0 ? item.price + " zł" : null}</p>
                    <strong className="small">{item.discount ? item.discountTitle : null}</strong>
                    <strong className="small">{item.multiple ? item.multipleTitle : null}</strong>
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
                        <h2 className="mb-3">Pozostałe opcje</h2>
                        {/* <p className="description mb-3"></p> */}
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
        features: state.techServices,
    }
}

export default connect(mapStateToProps)(FormTechServices);
