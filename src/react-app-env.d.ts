/// <reference types="react-scripts" />

interface NewsItem {
  image: string;
  url: string;
  title: string;
  publishedDate: string;
  site: string;
  text: string;
}

interface Quote {
  symbol: string;
  name: string;
  price: number;
  changesPercentage: number;
  change: number;
  dayLow: number;
  dayHigh: number;
  yearHigh: number;
  yearLow: number;
  marketCap: number;
  priceAvg50: number;
  priceAvg200: number;
  volume: number;
  avgVolume: number;
  exchange: string;
  open: number;
  previousClose: number;
  eps: number;
  pe: number;
  earningsAnnouncement: string;
  sharesOutstanding: number;
  timestamp: number;
}

interface SearchResult {
  symbol: string;
  name: string;
  currency: string;
  stockExchange: string;
  exchangeShortName: string;
}

interface MarketQuote {
  ticker: string;
  changes: number;
  price: string;
  changesPercentage: string;
  companyName: string;
}

interface MarketFetch {
  data: MarketQuote[];
  loading: boolean;
}

interface Button {
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

type KeyValueObject = {
  [key: string]: any;
};

interface FormattedQuote {
  symbol: string;
  name: string;
  exchange: string;
  price: string;
  change: string;
  changesPercentage: string;
  color: string;
  previousClose: string;
  open: string;
  dayHigh: string;
  dayLow: string;
  yearHigh: string;
  yearLow: string;
  marketCap: string;
  pe: string;
  eps: string;
  sharesOutstanding: string;
  volume: string;
  avgVolume: string;
}

type Timeframe = '1D' | '5D' | '1M' | '6M' | 'YTD' | '1Y' | '5Y' | 'MAX';

type Statement =
  | 'income-statement'
  | 'balance-sheet-statement'
  | 'cash-flow-statement';

type Period = 'annual' | 'quarter';

interface TableHeading {
  label: string;
  property: string;
}

type HistoricalPrices = (
  | {
      date: string;
      open: number;
      low: number;
      high: number;
      close: number;
      volume: number;
    }
  | {
      date: string;
      open: number;
      high: number;
      low: number;
      close: number;
      volume: number;
      unadjustedVolume: number;
      change: number;
      changePercent: number;
      vwap: number;
      label: string;
      changeOverTime: number;
    }
)[];

type FormattedHistoricalPrices = {
  x: Date;
  y: Number;
}[];

type HistoricalChartData = {
  x: Date;
  y: Number;
}[];

type TooltipFormat = 'h:mm a' | 'MMM D h:mm a' | 'MMM D, YYYY';
type TimeScaleFormat = 'hour' | 'day' | 'month';

type Exchange =
  | ''
  | 'INDEX'
  | 'MUTUAL_FUND'
  | 'NASDAQ'
  | 'ETF'
  | 'COMMODITY'
  | 'CRYPTO'
  | 'FOREX'
  | 'TSX'
  | 'AMEX'
  | 'NYSE'
  | 'EURONEXT';

interface SearchResult {
  symbol: string;
  name: string;
  currency: string;
  stockExchange: string;
  exchangeShortName: string;
}

interface SectorQuote {
  sector: string;
  changesPercentage: string;
}

interface MarketQuote {
  ticker: string;
  changes: number;
  price: string;
  changesPercentage: string;
}
