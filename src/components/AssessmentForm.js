import React, { Component } from 'react';
import FormServices from './FormServices';
import FormMaterials from './FormMaterials';
import FormShopProject from './FormShopProject';
import FormWebsiteProject from './FormWebsiteProject';
import FormLanguages from './FormLanguages';
import FormShopExtraFeatures from './FormShopExtraFeatures';
import FormSeoActions from './FormSeoActions';
import FormTechServices from './FormTechServices';

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
                <FormSeoActions />
                <FormTechServices />
            </div>
        )
    }
}

export default AssessmentForm;