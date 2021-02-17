import { Dispatch } from 'redux';
import { AppState } from '../reducers/rootReducer';
import { NewsItem, Quote } from './APITypes';

/* ##### RealData Action Types ##### */

const ENABLE_REAL_DATA = 'ENABLE_REAL_DATA';
const DISABLE_REAL_DATA = 'DISABLE_REAL_DATA';

export interface EnableRealData {
  type: typeof ENABLE_REAL_DATA;
}

export interface DisableRealData {
  type: typeof DISABLE_REAL_DATA;
  payload: string;
}

export type RealDataActionTypes = EnableRealData | DisableRealData;

/* ###### Quote Action Types ##### */
const FETCH_QUOTE_REQUEST = 'FETCH_QUOTE_REQUEST';
const FETCH_QUOTE_SUCCESS = 'FETCH_QUOTE_SUCCESS';
const FETCH_QUOTE_FAILURE = 'FETCH_QUOTE_FAILURE';
const FETCH_QUOTE_NEWS_REQUEST = 'FETCH_QUOTE_NEWS_REQUEST';
const FETCH_QUOTE_NEWS_SUCCESS = 'FETCH_QUOTE_NEWS_SUCCESS';
const FETCH_QUOTE_NEWS_FAILURE = 'FETCH_QUOTE_NEWS_FAILURE';

export interface FetchQuoteRequest {
  type: typeof FETCH_QUOTE_REQUEST;
}
export interface FetchQuoteSuccess {
  type: typeof FETCH_QUOTE_SUCCESS;
  payload: Quote[];
}
export interface FetchQuoteFailure {
  type: typeof FETCH_QUOTE_FAILURE;
  payload: string;
}
export interface FetchQuoteNewsRequest {
  type: typeof FETCH_QUOTE_NEWS_REQUEST;
}
export interface FetchQuoteNewsSuccess {
  type: typeof FETCH_QUOTE_NEWS_SUCCESS;
  payload: NewsItem[];
}
export interface FetchQuoteNewsFailure {
  type: typeof FETCH_QUOTE_NEWS_FAILURE;
  payload: string;
}

export type FetchQuote = (symbol: string) => (dispatch: Dispatch<AppActions>, getState: AppState) => void

export type QuoteActionTypes =
  | FetchQuoteRequest
  | FetchQuoteSuccess
  | FetchQuoteFailure
  | FetchQuoteNewsRequest
  | FetchQuoteNewsSuccess
  | FetchQuoteNewsFailure

/* ###### News Action Types ##### */
const FETCH_NEWS_REQUEST = 'FETCH_NEWS_REQUEST';
const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';
const FETCH_NEWS_FAILURE = 'FETCH_NEWS_FAILURE';

export interface FetchNewsRequest {
  type: typeof FETCH_NEWS_REQUEST;
}
export interface FetchNewsSuccess {
  type: typeof FETCH_NEWS_SUCCESS;
  payload: NewsItem[];
}
export interface FetchNewsFailure {
  type: typeof FETCH_NEWS_FAILURE;
  payload: string;
}

export type NewsActionTypes =
  | FetchNewsRequest
  | FetchNewsSuccess
  | FetchNewsFailure;

/* ##### PriceOverview Action Types */

const FETCH_PRICE_OVERVIEW_REQUEST = 'FETCH_PRICE_OVERVIEW_REQUEST';
const FETCH_PRICE_OVERVIEW_SUCCESS = 'FETCH_PRICE_OVERVIEW_SUCCESS';
const FETCH_PRICE_OVERVIEW_FAILURE = 'FETCH_PRICE_OVERVIEW_FAILURE';

export interface FetchPriceOverviewRequest {
  type: typeof FETCH_PRICE_OVERVIEW_REQUEST;
}
export interface FetchPriceOverviewSuccess {
  type: typeof FETCH_PRICE_OVERVIEW_SUCCESS;
  payload: Quote[];
}
export interface FetchPriceOverviewFailure {
  type: typeof FETCH_PRICE_OVERVIEW_FAILURE;
  payload: string;
}

export type PriceOverviewActionTypes =
  | FetchPriceOverviewRequest
  | FetchPriceOverviewSuccess
  | FetchPriceOverviewFailure;

/* ##### Watchlist Action Types */

const ADD_TO_WATCHLIST = 'ADD_TO_WATCHLIST';
const REMOVE_FROM_WATCHLIST = 'REMOVE_FROM_WATCHLIST';

export interface AddToWatchlist {
  type: typeof ADD_TO_WATCHLIST;
  payload: string;
}

export interface RemoveFromWatchlist {
  type: typeof REMOVE_FROM_WATCHLIST;
  payload: string;
}

export type WatchlistActionTypes = AddToWatchlist | RemoveFromWatchlist;

/* ##### App Action Types ##### */

export type AppActions =
  | RealDataActionTypes
  | QuoteActionTypes
  | NewsActionTypes
  | PriceOverviewActionTypes
  | WatchlistActionTypes;
