import React, { Component } from 'react';
import FormServices from './FormServices';
import FormMaterials from './FormMaterials';
import FormShopProject from './FormShopProject';
import FormWebsiteProject from './FormWebsiteProject';
import FormLanguages from './FormLanguages';
import FormShopExtraFeatures from './FormShopExtraFeatures';

export class AssessmentForm extends Component {
    render() {
        return(
            <div>
                <FormServices />
                <FormMaterials />
                <FormShopProject />
                <FormWebsiteProject />
                <FormLanguages />
                <FormShopExtraFeatures />
            </div>
        )
    }
}

export default AssessmentForm;