import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './components/stores/index';
import {Provider} from 'react-redux'

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(
    <Provider store={store}>
      <App />
    </Provider>, rootElement);
} else {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    , rootElement);
}