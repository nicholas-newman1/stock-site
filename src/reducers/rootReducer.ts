import { newsReducer } from '../reducers/newsReducer';
import { combineReducers } from 'redux';
import { realDataReducer } from './realDataReducer';

const rootReducer = combineReducers({
  news: newsReducer,
  realData: realDataReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
