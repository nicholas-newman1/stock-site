import news from './news';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ news });

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
