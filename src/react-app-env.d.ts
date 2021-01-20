/// <reference types="react-scripts" />

type APIObject = {
  [key: string]: number | string | null;
};

interface NewsItem {
  image: string;
  url: string;
  title: string;
  publishedDate: string;
  site: string;
  text: string;
}

type Timeframe = '1D' | '5D' | '1M' | '6M' | 'YTD' | '1Y' | '5Y' | 'MAX';

type Statement =
  | 'income-statement'
  | 'balance-sheet-statement'
  | 'cash-flow-statement';

type Period = '' | 'quarter';

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
