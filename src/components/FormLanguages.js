import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap'; 
import Item from './common/Item';
import TextField from '@material-ui/core/TextField';
import {connect} from 'react-redux';

class FormMaterials extends Component {

    listAllItems() {
        return this.props.languages.map((item) => {
            return (
            <Item 
                key={item.id}
            >
                <div>{item.icon}</div>
                <p className="mb-2">{item.title}</p>
                <p className="my-3 price">{item.price > 0 ? item.price+" zł" : null}</p>
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
                    <h2 className="mb-3">Wiele języków</h2>
                    <p className="description mb-3">Zwiększ swój zasięg dodając więcej wersji językowych. Pozwoli to na dotarcie do zagranicznych użytkowników.</p>
                </Col>
            </Row>
            <Row className="d-flex flex-row justify-content-center">
                
                {this.listAllItems()}

                <Col xs="12" sm="6" md="4" xl='3'>
                    <TextField className="text-white" type="number" variant="outlined" label="Outlined" variant="outlined" />
                </Col>
            </Row>
        </Container>
    );
  }
}

function mapStateToProps(state){
  return{
    global: state.global,
    languages: state.languages,
  }
}

export default connect(mapStateToProps)(FormMaterials);
