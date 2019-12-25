import React from 'react';
import { Col } from 'reactstrap'; 

const Item = (props) => {
    return (
      <Col xs="12" sm="6" md="4" xl={props.xl ? props.xl : '3'}>
        {props.children}
      </Col>
    );
}

export default Item;