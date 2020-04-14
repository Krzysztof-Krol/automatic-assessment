import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap'; 
import Switch from './common/Switch';
import {connect} from 'react-redux';

const features = [
    {
        id: 1439,
        checked: false,
        name: 'installOnServer',
        title: 'Instalacja na serwerze',
        price: 50,
        desc: "Czy chcesz, abym zainstalował pliki na serwerze i połączył bazę danych?",
        icon: ''
    },
    {
        id: 6239,
        checked: false,
        name: 'domainParking',
        title: 'Połączenie domeny',
        price: 50,
        desc: "Jeśli masz nową domenę, trzeba zaparkować ją na zakupionym serwerze",
        icon: ''
    },
    {
        id: 5557,
        checked: false,
        name: 'mailBox',
        title: 'Skrzynka pocztowa',
        price: 120,
        desc: "Konfiguracja skrzynki pocztowej dla Twojej firmy, np. mail@twoja-domena.pl",
        icon: ''
    },
    {
        id: 5547,
        checked: false,
        name: 'installment',
        title: 'Raty',
        multiple: 0.1,
        multipleTitle: '+10% wyceny',
        price: '',
        desc: "Płatność co miesiąc; zostanie rozłożona na 3 raty",
        icon: ''
    },

]

class FormTechServices extends Component {
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
                    {
                        features.map((item) => {
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
