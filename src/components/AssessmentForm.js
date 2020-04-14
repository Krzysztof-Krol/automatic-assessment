import React, { Component, useState } from 'react';
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
import { Button } from 'reactstrap';

const AssessmentForm = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const tabs = [<FormServices />,
        <FormMaterials />,
        <FormShopProject />,
        <FormWebsiteProject />,
        <FormLanguages />,
        <FormShopExtraFeatures />,
        <FormSeoActions />,
        <FormTechServices />,
        <FormExpressProduction />,
        <FormSummary />];
    return(
            <div>
                {
                    tabs[selectedTab]
                }
                <Button onClick={() => setSelectedTab(selectedTab - 1)}>Wstecz</Button>
                <Button onClick={() => setSelectedTab(selectedTab + 1)}>Dalej</Button>
            </div>
    );
}

export default AssessmentForm;