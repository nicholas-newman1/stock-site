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
import sectorsReducer from '../features/SectorTable/sectorsSlice';
import activesReducer from '../features/ActivesPriceList/activesSlice';
import gainersReducer from '../features/GainersPriceList/gainersSlice';
import losersReducer from '../features/LosersPriceList/losersSlice';
import quoteChartReducer from '../features/QuoteChart/quoteChartSlice';
import quoteFinancialsReducer from '../features/QuoteFinancials/quoteFinancialsSlice';
import quoteProfileReducer from '../features/QuoteProfile/quoteProfileSlice';
import quoteValuationReducer from '../features/QuoteValuation/quoteValuationSlice';

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
  sectors: sectorsReducer,
  actives: activesReducer,
  gainers: gainersReducer,
  losers: losersReducer,
  quoteChart: quoteChartReducer,
  quoteFinancials: quoteFinancialsReducer,
  quoteProfile: quoteProfileReducer,
  quoteValuation: quoteValuationReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
