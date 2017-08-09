import { fork } from 'redux-saga/effects';
import { watchUser, loadingUsers } from './watch';

export default function* rootSaga() {
    yield [
        fork(watchUser),
        fork(loadingUsers),
    ];
}
