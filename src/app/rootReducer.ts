import newsReducer from '../common/redux/modules/news';
import priceOverviewReducer from '../features/PriceOverview/priceOverviewSlice';
import { combineReducers } from 'redux';
import watchlistReducer from '../features/Watchlist/watchlistSlice';
import realDataReducer from '../common/redux/modules/realData';
import quoteReducer from '../pages/QuotePage/quoteSlice';

const rootReducer = combineReducers({
  news: newsReducer,
  realData: realDataReducer,
  quote: quoteReducer,
  priceOverview: priceOverviewReducer,
  watchlist: watchlistReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
