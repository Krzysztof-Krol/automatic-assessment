import { combineReducers } from 'redux';
import { options } from '../reducers/option';

const allReducers = combineReducers({
    options
});

export default allReducers;