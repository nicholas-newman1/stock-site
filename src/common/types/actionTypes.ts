import { RealDataActionTypes } from '../redux/modules/realData';
import { NewsActionTypes } from '../redux/modules/news';
import { WatchlistActionTypes } from '../../features/Watchlist/watchlistSlice';
import { QuoteActionTypes } from '../../pages/QuotePage/quoteSlice';
import { PriceOverviewActionTypes } from '../../features/PriceOverview/priceOverviewSlice';

export type AppActions =
  | RealDataActionTypes
  | QuoteActionTypes
  | NewsActionTypes
  | PriceOverviewActionTypes
  | WatchlistActionTypes;
