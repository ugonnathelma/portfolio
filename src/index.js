import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import portfolioApp from './reducers';

import { injectGlobal } from 'styled-components';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(portfolioApp);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();

injectGlobal`
  html, body {
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px; 
    font-family: 'Quicksand', sans-serif;
  }
`