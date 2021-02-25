import { createStore, compose, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import rootReducer, { AppState } from '../../app/rootReducer';
import { AppActions } from '../types/actionTypes';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)
    // composeWithDevTools()
  )
);

export default store;
