import {combineReducers} from 'redux';

import currency from './currency';

const appReducer = combineReducers({
    currency,
});

export default appReducer;