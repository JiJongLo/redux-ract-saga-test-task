import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import './index.css';
import configureStore from './store/configureStore';
import routes from './routes/routes';

const store = configureStore;
export const history = syncHistoryWithStore(browserHistory, store);

injectTapEventPlugin();

ReactDOM.render(
< Provider
store = { store } >
    < Router
history = { history }
routes = { routes } / >
    < / Provider >,
    document.getElementById('root')
)
;

registerServiceWorker();
