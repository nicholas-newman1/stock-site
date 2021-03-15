import { Dispatch } from 'redux';
import { AppState } from '../../app/rootReducer';
import { AppActions } from '../../common/types/actionTypes';
import { fetchFromAPI } from '../../common/utils/api';
import { NewsItem, Quote } from '../../common/types/APITypes';
import { isStock } from './helpers';

// types
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

export type QuoteActionTypes =
  | FetchQuoteRequest
  | FetchQuoteSuccess
  | FetchQuoteFailure
  | FetchQuoteNewsRequest
  | FetchQuoteNewsSuccess
  | FetchQuoteNewsFailure;

interface QuoteState {
  quoteData: {
    loading: boolean;
    data: Quote[];
    error: string;
  };
  newsData: {
    loading: boolean;
    data: NewsItem[];
    error: string;
  };
  isStock: boolean;
}

// initial state
const initialState: QuoteState = {
  quoteData: {
    loading: true,
    data: [],
    error: '',
  },
  newsData: {
    loading: true,
    data: [],
    error: '',
  },
  isStock: false,
};

// reducer
const quoteReducer = (state = initialState, action: QuoteActionTypes) => {
  switch (action.type) {
    case 'FETCH_QUOTE_REQUEST':
      return {
        ...state,
        quoteData: { ...state.quoteData, loading: true },
        newsData: { ...state.newsData, loading: true },
      };
    case 'FETCH_QUOTE_SUCCESS':
      return {
        ...state,
        quoteData: {
          ...state.quoteData,
          data: action.payload,
          loading: false,
          error: '',
        },
        isStock: action.payload.length
          ? isStock(action.payload[0].exchange)
          : false,
      };
    case 'FETCH_QUOTE_FAILURE':
      return {
        ...state,
        quoteData: {
          ...state.quoteData,
          data: [],
          loading: false,
          error: action.payload,
        },
      };
    case 'FETCH_QUOTE_NEWS_REQUEST':
      return { ...state, newsData: { ...state.newsData, loading: true } };
    case 'FETCH_QUOTE_NEWS_SUCCESS':
      return {
        ...state,
        newsData: {
          ...state.newsData,
          data: action.payload,
          loading: false,
          error: '',
        },
      };
    case 'FETCH_QUOTE_NEWS_FAILURE':
      return {
        ...state,
        newsData: {
          ...state.newsData,
          data: [],
          loading: false,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};

export default quoteReducer;

// actions
const fetchQuoteRequest = (): FetchQuoteRequest => ({
  type: 'FETCH_QUOTE_REQUEST',
});

const fetchQuoteSuccess = (data: Quote[]): FetchQuoteSuccess => ({
  type: 'FETCH_QUOTE_SUCCESS',
  payload: data,
});

const fetchQuoteFailure = (error: string): FetchQuoteFailure => ({
  type: 'FETCH_QUOTE_FAILURE',
  payload: error,
});

const fetchQuoteNewsRequest = (): FetchQuoteNewsRequest => ({
  type: 'FETCH_QUOTE_NEWS_REQUEST',
});

const fetchQuoteNewsSuccess = (data: NewsItem[]): FetchQuoteNewsSuccess => ({
  type: 'FETCH_QUOTE_NEWS_SUCCESS',
  payload: data,
});

const fetchQuoteNewsFailure = (error: string): FetchQuoteNewsFailure => ({
  type: 'FETCH_QUOTE_NEWS_FAILURE',
  payload: error,
});

export const fetchQuote = (symbol: string) => {
  return fetchFromAPI(
    `quote/${symbol}`,
    'quote',
    fetchQuoteRequest,
    fetchQuoteSuccess,
    fetchQuoteFailure
  );
};

export const fetchQuoteNews = (symbol = '') => {
  return fetchFromAPI(
    'stock_news',
    'news',
    fetchQuoteNewsRequest,
    fetchQuoteNewsSuccess,
    fetchQuoteNewsFailure,
    {
      params:
        symbol === ''
          ? 'limit=10&tickers=AAPL,FB,AMZN,TSLA'
          : `limit=10&tickers=${symbol}`,
    }
  );
};

export const fetchQuoteAndQuoteNews = (symbol: string) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    // @ts-ignore
    return dispatch(fetchQuote(symbol)).then(() => {
      const data = getState().quote.quoteData.data;
      return !data.length
        ? // @ts-ignore
          dispatch(fetchQuoteNews())
        : isStock(data[0].exchange)
        ? // @ts-ignore
          dispatch(fetchQuoteNews(symbol))
        : // @ts-ignore
          dispatch(fetchQuoteNews());
    });
  };
};
