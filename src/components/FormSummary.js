import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap'; 
// import Item from './common/Item';
import {connect} from 'react-redux';

class FormSummary extends Component {

    // listAllItems() {
    //     return this.props.materials.map((item) => {
    //         return (
    //         <Item 
    //             key={item.id} 
    //         >
    //             <div>{item.icon}</div>
    //             <p className="mb-2">{item.title}</p>
    //             <p className="item-desc">{item.desc}</p>
    //             <strong className="small">{item.discount ? item.discountTitle : null}</strong>
    //         </Item>
    //         );
    //     })
    // } 
  
  render(){
    return (
        <Container className="has-icons mb-5">
            <Row>
                <Col xs="12" sm="12" md="12" lg={{offset: 2, size: 8}} className="mx-auto">
                    <h2 className="mb-3">Podsumowanie</h2>
                    {/* <p className="description mb-3">Jeśli posiadasz materiały potrzebne do stworzenia strony (teksty, zdjęcia lub logo) mogę szybciej zacząć,
    a co za tym idzie szybciej skończyć pracę nad projektem.</p> */}
                </Col>
            </Row>
            <Row>
                <Col xs="12" sm="12" md="4" lg="4" className="mx-auto">
                    <div>
                        <h3 className="mb-2">Szacowany koszt realizacji</h3>
                        <strong className="price ">2750 zł</strong>
                    </div>
                    <div>
                        
                    </div>
                </Col>
                <Col xs="12" sm="12" md="8" lg="8" className="mx-auto">
                    <h3 className="mb-3">Składowe zlecenia</h3>
                    {/* <p className="description mb-3">Jeśli posiadasz materiały potrzebne do stworzenia strony (teksty, zdjęcia lub logo) mogę szybciej zacząć,
    a co za tym idzie szybciej skończyć pracę nad projektem.</p> */}
                </Col>
            </Row>  
        </Container>
    );
  }
}

function mapStateToProps(state){
  return{
    global: state.global,
    // materials: state.materials
  }
}

export default connect(mapStateToProps)(FormSummary);
