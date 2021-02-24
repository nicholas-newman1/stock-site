import newsReducer from '../common/redux/modules/news';
import priceOverviewReducer from '../features/PriceOverview/priceOverviewSlice';
import { combineReducers } from 'redux';
import watchlistReducer from '../features/Watchlist/watchlistSlice';
import realDataReducer from '../common/redux/modules/realData';
import quoteReducer from '../pages/QuotePage/quoteSlice';
import commodityReducer from '../features/CommodityTable/commoditySlice';
import cryptoReducer from '../features/CryptoTable/cryptoSlice';
import forexReducer from '../features/ForexTable/forexSlice';
import indexReducer from '../features/IndexTable/indexSlice';
import mainNewsItemReducer from '../features/MainNewsItem/mainNewsItemSlice';

const rootReducer = combineReducers({
  news: newsReducer,
  realData: realDataReducer,
  quote: quoteReducer,
  priceOverview: priceOverviewReducer,
  watchlist: watchlistReducer,
  commodity: commodityReducer,
  crypto: cryptoReducer,
  forex: forexReducer,
  index: indexReducer,
  mainNewsItem: mainNewsItemReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
