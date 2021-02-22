import { QuoteActionTypes } from '../types/actionTypes';
import { NewsItem, Quote } from '../types/APITypes';
import { isStock } from '../common/utils/helpers';

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

export const quoteReducer = (
  state = initialState,
  action: QuoteActionTypes
) => {
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
        isStock: isStock(action.payload[0].exchange),
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
