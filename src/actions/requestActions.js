import * as types from '../constants/actionTypes';

/*action generators*/

export const requestUserAdding = (user) => ({
	type: types.REQUEST_UPDATE_USER,
	payload : user
});

export const getUsers = () => ({
    type: types.REQUEST_GET_USERS
});

export const successUsersRequest = (data) => ({
    type: types.GET_USERS_SUCCESS,
    payload: data
});

export const failedUsersRequest = (error) => ({
    type: types.GET_USERS_FAILED,
    payload: error
});

export const successUpdateRequest = (data) => ({
	type: types.UPDATE_USER_SUCCESS,
	payload: data
});

export const failedUpdateRequest = (error) => ({
	type: types.UPDATE_USER_FAILED,
    payload: error
});
