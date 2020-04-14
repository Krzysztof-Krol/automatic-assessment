import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap'; 
import Switch from './common/Switch';
import {connect} from 'react-redux';

const features = [
    {
        id: 539,
        checked: false,
        name: 'basicSeo',
        title: 'Podstawowe SEO',
        price: 100,
        desc: "Konfiguracja indeksacji, metadanych, tworzenie mapy strony...",
        icon: ''
    },
    {
        id: 1557,
        checked: false,
        name: 'optimization',
        title: 'Optymalizacja',
        price: 450,
        desc: 'Optymalizacja czasu ładowania strony, zmniejszenie jej wagi, kompresja plików...',
        icon: ''
    },
    {
        id: 5671,
        checked: false,
        name: 'schema',
        title: 'Dane Strukturalne',
        price: 50,
        desc: 'Daj znać Google jaką masz branżę, gdzie jesteś, jakie masz ceny, godziny otwarcia...',
        icon: ''
    },
    {
        id: 5271,
        checked: false,
        name: 'schemaPriceList',
        title: 'Dane Strukturalne Cennika',
        price: 100,
        desc: 'Szansa na pokazanie Twoich cen w wynikach wyszukiwania Google',
        icon: ''
    },
    {
        id: 1271,
        checked: false,
        name: 'schemaProducts',
        title: 'Dane Strukturalne Sklepu',
        price: 150,
        desc: 'Szansa na pokazanie produktów sklepu w wynikach wyszukiwania Google',
        icon: ''
    },
    {
        id: 3271,
        checked: false,
        name: 'schemaTrueStars',
        title: 'Gwiazdki ocen Google',
        price: 100,
        desc: 'Pozwól oceniać swoje strony i wpisy - ocena wyświela się w postaci gwiazdek w Google',
        icon: ''
    },
    {
        id: 3571,
        checked: false,
        name: 'schemaFakeStars',
        title: 'Sztuczne gwiazdki ocen',
        price: 200,
        desc: 'Nie ma możliwości zmiany oceny. Generujemy super ocenę dla każdej podstrony a konkurencja ich nie zaniży',
        icon: ''
    },
    {
        id: 189,
        checked: false,
        name: 'keywords',
        title: 'Optymalizacja treści',
        price: 250,
        desc: 'Dobór fraz pozycjonowanych i nasycenie treści dla wstępnego pozycjonowania strony',
        icon: ''
    },
    {
        id: 889,
        checked: false,
        name: 'innerLinking',
        title: 'Linkowanie wewnętrzne',
        price: 100,
        desc: 'Ze strategicznym podejściem pokieruj linki w witrynie, by podstrony pomagały sobie osiągać lepsze pozycje',
        icon: ''
    },
    {
        id: 8812,
        checked: false,
        name: 'outsideLinking',
        title: 'Linkowanie zewnętrzne',
        price: 100,
        desc: 'Mała porcja strategicznych linków wystarczy, by internet o Tobie usłyszał. Osiągaj szybciej pierwsze sensowne pozycje w Google',
        icon: ''
    },
    {
        id: 8894,
        checked: false,
        name: 'pwa',
        title: 'Progressive Web App',
        price: 250,
        desc: 'dopasuj przeglądarkę do swojej strony na smartfonie i bądź dostępny w Google Play',
        icon: ''
    }
]

class FormSeoActions extends Component {
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
        features: state.seoActions,
    }
}

export default connect(mapStateToProps)(FormSeoActions);
