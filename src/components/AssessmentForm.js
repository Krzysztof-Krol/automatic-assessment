import React, { Component, useState } from 'react';
import FormServices from './FormServices';

export class AssessmentForm extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            step: 0,
            service: ''
        };
    }

    render() {
        const {step, service} = this.state;

        switch(step){
            case 0: 
                return(
                    <FormServices />
                )
            case 2:
                return (
                    <h1>{this.state.service} qweqweqew</h1>
                )
            case 3:
                return <h1>Ile podstron ma mieć strona</h1>
            case 4:
                return <h1>Ile języków</h1>
            case 5:
                return <h1>Success</h1>
        }
    }
}

export default AssessmentForm
