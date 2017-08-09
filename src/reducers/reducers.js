import * as types from '../constants/actionTypes';
import {initialState} from './initialState';

export function user(state = initialState, action) {
	switch(action.type) {
        case types.GET_USERS_SUCCESS:
            return Object.assign({}, state, {
                listUsers: action.payload
            });
		case types.UPDATE_USER_SUCCESS:
            return Object.assign({}, state, {
                listUsers: [...state.listUsers, action.payload]
            });
		default: return state;
	}
}
