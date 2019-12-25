import {combineReducers} from 'redux';
import reducerGlobal from './reducerGlobal';
import reducerServices from './reducerServices';
import reducerMaterials from './reducerMaterials';
import reducerShopProject from './reducerShopProject';
import reducerWebsiteProject from './reducerWebsiteProject';
import reducerLanguages from './reducerLanguages';
import reducerShopExtraFeatures from './reducerShopExtraFeatures';

const allReducers = combineReducers({
    global: reducerGlobal,
    services: reducerServices,
    materials: reducerMaterials,
    shopProject: reducerShopProject,
    websiteProject: reducerWebsiteProject,
    languages: reducerLanguages,
    shopExtraFeatures: reducerShopExtraFeatures
});

export default allReducers;