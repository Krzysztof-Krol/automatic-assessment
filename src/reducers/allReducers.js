import {combineReducers} from 'redux';
import reducerGlobal from './reducerGlobal';
import reducerServices from './reducerServices';
import reducerMaterials from './reducerMaterials';

const allReducers = combineReducers({
    global: reducerGlobal,
    services: reducerServices,
    materials: reducerMaterials
});

export default allReducers;