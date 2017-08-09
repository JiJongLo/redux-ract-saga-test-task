import { call, put, takeLatest } from 'redux-saga/effects';
import * as types from '../constants/actionTypes';
import { getAllUsers, updateUserList } from '../api/api';

import {
    failedUpdateRequest,
    failedUsersRequest,
    successUpdateRequest,
    successUsersRequest
} from '../actions/requestActions';

export function* loadData(action) {
    try {
        const user = yield call(updateUserList, action.payload);
        yield put(successUpdateRequest(user));
    } catch (error) {
        yield put(failedUpdateRequest(error));
    }
};

export function* loadUsers() {
    try {
        const user = yield call(getAllUsers);
        yield put(successUsersRequest(user));
    } catch (error) {
        yield put(failedUsersRequest(error));
    }
};

export function* watchUser() {
    yield takeLatest(types.REQUEST_UPDATE_USER, loadData);
}

export function* loadingUsers() {
    yield takeLatest(types.REQUEST_GET_USERS, loadUsers);
}
