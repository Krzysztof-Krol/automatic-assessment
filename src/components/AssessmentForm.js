import React, { Component } from 'react';
import FormServices from './FormServices';
import FormMaterials from './FormMaterials';
import FormShopProject from './FormShopProject';
import FormWebsiteProject from './FormWebsiteProject';
import FormLanguages from './FormLanguages';
import FormShopExtraFeatures from './FormShopExtraFeatures';
import FormSeoActions from './FormSeoActions';
import FormTechServices from './FormTechServices';
import FormExpressProduction from './FormExpressProduction';
import FormSummary from './FormSummary';
import {connect} from 'react-redux';


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
                <FormExpressProduction />
                <FormSummary />
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        global: state.global,
    }
}
  
export default connect(mapStateToProps)(AssessmentForm);