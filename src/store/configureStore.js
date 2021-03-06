import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

import rootReducers from '../reducers/index';
import rootSaga from '../sagas/index';

const loggerMiddleware = createLogger();
const defaultState = {};
const sagaMiddleware = createSagaMiddleware();

const configureStore = createStore(
	rootReducers,
	defaultState,
	composeWithDevTools(
		applyMiddleware(thunk, sagaMiddleware, loggerMiddleware)
	),
);

sagaMiddleware.run(rootSaga);

export default configureStore;