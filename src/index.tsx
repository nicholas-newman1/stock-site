import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer, { AppState } from './app/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { AppActions } from './common/types/actionTypes';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>),
    composeWithDevTools()
  )
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
