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

const SET_NEWS_LOADING = 'SET_NEWS_LOADING';
const SET_NEWS_DATA = 'SET_NEWS_DATA';

export interface SetNewsLoading {
  type: typeof SET_NEWS_LOADING;
  payload: boolean;
}

export interface SetNewsData {
  type: typeof SET_NEWS_DATA;
  payload: NewsItem[];
}

export type NewsActionTypes = SetNewsLoading | SetNewsData;

/* ##### PriceOverview Action Types */

const SET_PRICE_OVERVIEW_LOADING = 'SET_PRICE_OVERVIEW_LOADING';
const SET_PRICE_OVERVIEW_DATA = 'SET_PRICE_OVERVIEW_DATA';

export interface SetPriceOverviewLoading {
  type: typeof SET_PRICE_OVERVIEW_LOADING;
  payload: boolean;
}

export interface SetPriceOverviewData {
  type: typeof SET_PRICE_OVERVIEW_DATA;
  payload: Quote[];
}

export type PriceOverviewActionTypes =
  | SetPriceOverviewLoading
  | SetPriceOverviewData;

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
