import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap'; 
import Item from './common/Item';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {connect} from 'react-redux';

class FormLanguages extends Component {

    listAllItems() {
        return this.props.languages.map((item) => {
            return (
                <Item 
                    key={item.id}
                >
                    <div>{item.icon}</div>
                    <p className="mb-2">{item.title}</p>
                    <p className="my-3 price">{item.price > 0 ? item.price + " zł" : null}</p>
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
                        <p className="description mb-3">Zwiększ swój zasięg dodając więcej wersji językowych. Pozwoli to na dotarcie do zagranicznych użytkowników. Treści dodatkowych wersji językowych możesz wprowadzić sam lub zlecić to mnie (treści stron: Strona główna, Regulamin, O nas, Kontakt, itp.).</p>
                    </Col>
                </Row>
                <Row className="d-flex flex-row justify-content-center">
                    
                    {this.listAllItems()}

                    
                    <Col xs="12" sm="6" md="4" xl='4' className="d-flex flex-column align-items-start justify-content-center">
                        <FormControl className="d-flex mb-0" component="fieldset">
                            <FormLabel className="text-white text-left mb-3" component="legend">Liczba dodatkowych języków</FormLabel>
                            <TextField 
                                className="text-white d-flex mb-4" 
                                type="number" 
                                inputProps={{ 
                                    type: "number", 
                                    pattern: "[0-9]{2}", 
                                    min: "1", 
                                    step: "1", 
                                    max: "10" 
                                }}
                                variant="outlined" 
                                label="Wprowadź liczbę 1-10" 
                            />
                        </FormControl>

                        <FormControl className="d-flex mt-0" component="fieldset">
                            <FormLabel className="text-white text-left mb-3" component="legend">Wprowadzanie treści alternatywnych języków</FormLabel>
                            <RadioGroup aria-label="gender" name="gender1">
                                <FormControlLabel value="female" control={<Radio />} label="Wprowadzę sam" />
                                <FormControlLabel className="mb-0" value="male" control={<Radio />} label="Zlecam wprowadzenie treści" />
                                <strong className="price text-left pl-4 ml-2 mt-0">Koszt zlecenia: +{this.props.global[0].moreLanguages[0].implementCost} zł</strong>
                            </RadioGroup>
                        </FormControl>
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

export default connect(mapStateToProps)(FormLanguages);
