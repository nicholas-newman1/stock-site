import { newsReducer } from '../reducers/newsReducer';
import { priceOverviewReducer } from '../reducers/priceOverviewReducer';
import { combineReducers } from 'redux';
import { realDataReducer } from './realDataReducer';
import { watchlistReducer } from './watchlistReducer';
import { quoteReducer } from './quoteReducer';

const rootReducer = combineReducers({
  news: newsReducer,
  realData: realDataReducer,
  quote: quoteReducer,
  priceOverview: priceOverviewReducer,
  watchlist: watchlistReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
