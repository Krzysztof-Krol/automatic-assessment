import React from 'react';
import { Col } from 'reactstrap';
import Checkbox from '@material-ui/core/Checkbox';

const Switch = (props) => {
    return (
      <Col xs="12" sm="6" md="4" xl={props.xl ? props.xl : '3'}>
        <p>{props.title}</p>
        <Checkbox />
        {props.children}
      </Col>
    );
}

export default Switch;