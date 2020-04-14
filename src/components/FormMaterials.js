import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap'; 
import Item from './common/Item';
import { connect } from 'react-redux';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import HourglassFullIcon from '@material-ui/icons/HourglassFull';

const meterials = [
    {
        id: 51,
        checked: false,
        name: 'allMaterials',
        title: 'Mam wszystkie materiały',
        desc: 'Zdjęcia i teksty na podstrony',
        discount: 0.2,
        discountTitle: 'Rabat -20%',
        icon: <PlaylistAddCheckIcon />
    },
    {
        id: 798,
        checked: false,
        name: 'noneMaterials',
        title: 'Nie mam kompletu',
        desc: 'Materiały będą dosłane w czasie tworzenia strony',
        icon: <HourglassFullIcon />
    }
]

class FormMaterials extends Component {
  render(){
    return (
        <Container className="has-icons mb-5">
            <Row>
                <Col xs="12" sm="12" md="12" lg={{offset: 2, size: 8}} className="mx-auto">
                    <h2 className="mb-3">Materiały na potrzeby zlecenia</h2>
                    <p className="description mb-3">Jeśli posiadasz materiały potrzebne do stworzenia strony (teksty, zdjęcia lub logo) mogę szybciej zacząć,
    a co za tym idzie szybciej skończyć pracę nad projektem.</p>
                </Col>
            </Row>
            <Row className="d-flex flex-row justify-content-center">
                {
                    meterials.map((item) => {
                        return (
                            <Item
                                key={item.id}
                            >
                                <div>{item.icon}</div>
                                <p className="mb-2">{item.title}</p>
                                <p className="item-desc">{item.desc}</p>
                                <strong className="small">{item.discount ? item.discountTitle : null}</strong>
                            </Item>
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
    materials: state.materials
  }
}

export default connect(mapStateToProps)(FormMaterials);
