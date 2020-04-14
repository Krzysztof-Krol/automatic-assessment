export const options = (state = {
    formServices: null,
    formExpressProduction: null,
    formLanguages: null,
    formMaterials: null,
    formSeoActions: null,
    formShopExtraFeatures: null,
    formShopProject: null,
    formSummary: null,
    formTechServices: null,
    formWebsiteProject: null
}, action) => {
    switch (action.type) {
        case 'SELECTED_FORM_SERVICES':
            return [
                state, 
            ]
        default:
            return state;
    }
}