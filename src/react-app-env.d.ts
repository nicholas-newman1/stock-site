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

interface FormattedQuote {
  symbol: string;
  name: string;
  price: string;
  changesPercentage: string;
  change: string;
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
  color: 'green' | '#de0e00' | 'black';
}

type Timeframe = '1D' | '5D' | '1M' | 'YTD' | '1Y' | '5Y' | 'MAX';
