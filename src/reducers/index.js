import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import {
    user
} from './reducers';

// Combines all reducers to a single reducer function
const rootReducer = combineReducers({
    user,
    routing: routerReducer
});

export default rootReducer;