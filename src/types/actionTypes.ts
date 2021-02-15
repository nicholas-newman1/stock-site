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

// const SET_PRICE_OVERVIEW_LOADING = 'SET_PRICE_OVERVIEW_LOADING';
// const SET_PRICE_OVERVIEW_DATA = 'SET_PRICE_OVERVIEW_DATA';

// export interface SetPriceOverviewLoading {
//   type: typeof SET_PRICE_OVERVIEW_LOADING;
//   payload: boolean;
// }

// export interface SetPriceOverviewData {
//   type: typeof SET_PRICE_OVERVIEW_DATA;
//   payload: Quote[];
// }

// export type PriceOverviewActionTypes =
//   | SetPriceOverviewLoading
//   | SetPriceOverviewData;

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
  | NewsActionTypes
  | PriceOverviewActionTypes
  | WatchlistActionTypes;
