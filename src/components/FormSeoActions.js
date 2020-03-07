import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap'; 
import Switch from './common/Switch';
import {connect} from 'react-redux';

class FormSeoActions extends Component {

    listAllItems() {
        return this.props.features.map((item) => {
            return (
                <Switch 
                    key={item.id}
                    title={item.title}
                >
                    <p className="my-1 mt-3 price">{item.price > 0 ? item.price + " zł" : "ZA DARMO"}</p>
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
                        <h2 className="mb-3">SEO dla strony</h2>
                        <p className="description mb-3">Aby zdobyć ruch dla strony, warto zadbać o dostosowanie do wyszukiwarek i zadbanie, by wyróżnić się w Google.</p>
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
        features: state.seoActions,
    }
}

export default connect(mapStateToProps)(FormSeoActions);
