import { newsReducer } from '../reducers/newsReducer';
import { priceOverviewReducer } from '../reducers/priceOverviewReducer';
import { combineReducers } from 'redux';
import { realDataReducer } from './realDataReducer';
import { displayMobileNavReducer } from './displayMobileNavReducer';

const rootReducer = combineReducers({
  displayMobileNav: displayMobileNavReducer,
  news: newsReducer,
  realData: realDataReducer,
  priceOverview: priceOverviewReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
