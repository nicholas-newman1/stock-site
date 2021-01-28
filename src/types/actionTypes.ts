/* ##### realData action types ##### */

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

/* ###### news action types ##### */

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

/* ##### App action types ##### */

export type AppActions = NewsActionTypes | RealDataActionTypes;
