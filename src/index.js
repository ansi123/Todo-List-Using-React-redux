import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import rootReducers from './reducer';
import {createStore,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

const store = createStore(rootReducers,applyMiddleware(ReduxThunk));

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


