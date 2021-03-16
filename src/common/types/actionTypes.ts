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
import { ActivesActionTypes } from '../../features/ActivesPriceList/activesSlice';
import { GainersActionTypes } from '../../features/GainersPriceList/gainersSlice';
import { LosersActionTypes } from '../../features/LosersPriceList/losersSlice';
import { HistoricalPricesActionTypes } from '../../features/QuoteChart/quoteChartSlice';
import { FinancialsActionTypes } from '../../features/QuoteFinancials/quoteFinancialsSlice';
import { ProfileActionTypes } from '../../features/QuoteProfile/quoteProfileSlice';
import { ValuationActionTypes } from '../../features/QuoteValuation/quoteValuationSlice';

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
  | SectorsActionTypes
  | ActivesActionTypes
  | GainersActionTypes
  | LosersActionTypes
  | HistoricalPricesActionTypes
  | FinancialsActionTypes
  | ProfileActionTypes
  | ValuationActionTypes;
