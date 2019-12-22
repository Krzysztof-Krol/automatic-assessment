import React, { Component } from 'react';
import FormServices from './FormServices';
import FormMaterials from './FormMaterials';

export class AssessmentForm extends Component {
    render() {
        return(
            <div>
                <FormServices />
                <FormMaterials />
            </div>
        )
    }
}

export default AssessmentForm
