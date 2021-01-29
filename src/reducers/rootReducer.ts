import { newsReducer } from '../reducers/newsReducer';
import { priceOverviewReducer } from '../reducers/priceOverviewReducer';
import { combineReducers } from 'redux';
import { realDataReducer } from './realDataReducer';

const rootReducer = combineReducers({
  news: newsReducer,
  realData: realDataReducer,
  priceOverview: priceOverviewReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
