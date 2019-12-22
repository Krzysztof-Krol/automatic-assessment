import React from 'react';
import { Col } from 'reactstrap'; 

const Service = (props) => {
    return (
      <Col xs="12" sm="6" md="4" xl="3">
        {props.children}
        <p>{props.serviceName}</p>
      </Col>
    );
}

export default Service;