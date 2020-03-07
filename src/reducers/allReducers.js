import {combineReducers} from 'redux';
import reducerGlobal from './reducerGlobal';
import reducerServices from './reducerServices';
import reducerMaterials from './reducerMaterials';
import reducerShopProject from './reducerShopProject';
import reducerWebsiteProject from './reducerWebsiteProject';
import reducerLanguages from './reducerLanguages';
import reducerShopExtraFeatures from './reducerShopExtraFeatures';
import reducerSeoAcrions from './reducerSeoActions';
import reducerTechServices from './reducerTechServices';
import reducerExpressProduction from './reducerExpressProduction';

const allReducers = combineReducers({
    global: reducerGlobal,
    services: reducerServices,
    materials: reducerMaterials,
    shopProject: reducerShopProject,
    websiteProject: reducerWebsiteProject,
    languages: reducerLanguages,
    shopExtraFeatures: reducerShopExtraFeatures,
    seoActions: reducerSeoAcrions,
    techServices: reducerTechServices,
    expressProduction: reducerExpressProduction
});

export default allReducers;