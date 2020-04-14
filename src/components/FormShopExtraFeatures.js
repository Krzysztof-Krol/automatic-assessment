import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap'; 
import Switch from './common/Switch';
import {connect} from 'react-redux';

const features = [
    {
        id: 761,
        checked: true,
        name: 'blog',
        title: 'Blog',
        price: 0,
        desc: "Dotrzyj do większej liczby odbiorców przez wpisy na blogu",
        icon: ''
    },
    {
        id: 631,
        checked: false,
        name: 'googleMap',
        title: 'Mapa Google',
        price: 80,
        desc: 'Stylizowana mapa Google pokaże gdzie jest Twoja firma i podkreśli kompozycję strony',
        icon: ''
    },
    {
        id: 695,
        checked: false,
        name: 'newsletter',
        title: 'Newsletter',
        price: 100,
        desc: 'Wysyłaj wiadomości do osób zapisanych na listę',
        icon: ''
    },
    {
        id: 480,
        checked: false,
        name: 'socialMediaIntegration',
        title: 'Integracja z social media',
        price: 50,
        desc: 'Połącz swój sklep z profilami w mediach społecznościowych',
        icon: ''
    },
    {
        id: 984,
        checked: false,
        name: 'fbchat',
        title: 'Facebook Chat',
        price: 100,
        desc: 'Połącz swój sklep z Messengerem i czatuj z klientami',
        icon: ''
    },
    {
        id: 448,
        checked: false,
        name: 'analytics',
        title: 'Google Analytics',
        price: 80,
        desc: 'Sprawdź statystyki Twojego sklepu internetowego i generuj raporty',
        icon: ''
    },
    {
        id: 354,
        checked: false,
        name: 'rodo',
        title: 'Informacja Cookies i RODO',
        price: 50,
        desc: 'Poinformuj o tym jak przetwarzasz dane osobowe i pliki cookies',
        icon: ''
    }   
]

class FormShopExtraFeatures extends Component {
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
                    {
                        features.map((item) => {
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
