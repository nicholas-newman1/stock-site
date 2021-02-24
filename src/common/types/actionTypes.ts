import { RealDataActionTypes } from '../redux/modules/realData';
import { NewsActionTypes } from '../redux/modules/news';
import { WatchlistActionTypes } from '../../features/Watchlist/watchlistSlice';
import { QuoteActionTypes } from '../../pages/QuotePage/quoteSlice';
import { PriceOverviewActionTypes } from '../../features/PriceOverview/priceOverviewSlice';
import { CommodityActionTypes } from '../../features/CommodityTable/commoditySlice';
import { CryptoActionTypes } from '../../features/CryptoTable/cryptoSlice';
import { ForexActionTypes } from '../../features/ForexTable/forexSlice';
import { IndexActionTypes } from '../../features/IndexTable/indexSlice';
import { MainNewsItemActionTypes } from '../../features/MainNewsItem/mainNewsItemSlice';
import { SectorsActionTypes } from '../../features/SectorTable/sectorsSlice';

export type AppActions =
  | RealDataActionTypes
  | QuoteActionTypes
  | NewsActionTypes
  | PriceOverviewActionTypes
  | WatchlistActionTypes
  | CommodityActionTypes
  | CryptoActionTypes
  | ForexActionTypes
  | IndexActionTypes
  | MainNewsItemActionTypes
  | SectorsActionTypes;
