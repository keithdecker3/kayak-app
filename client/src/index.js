import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import { logger } from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware'

import registerServiceWorker from './registerServiceWorker';

import './index.css';
import App from './App';
import { reducer } from './store';

const store = createStore(reducer, applyMiddleware(promiseMiddleware(), logger));

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
