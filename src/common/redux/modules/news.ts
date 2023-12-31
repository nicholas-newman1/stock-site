import { fetchFromAPI } from '../../utils/api';

// types
const FETCH_NEWS_REQUEST = 'FETCH_NEWS_REQUEST';
const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';
const FETCH_NEWS_FAILURE = 'FETCH_NEWS_FAILURE';

interface FetchNewsRequest {
  type: typeof FETCH_NEWS_REQUEST;
}
interface FetchNewsSuccess {
  type: typeof FETCH_NEWS_SUCCESS;
  payload: NewsItem[];
}
interface FetchNewsFailure {
  type: typeof FETCH_NEWS_FAILURE;
  payload: string;
}

export type NewsActionTypes =
  | FetchNewsRequest
  | FetchNewsSuccess
  | FetchNewsFailure;

interface NewsState {
  loading: boolean;
  data: NewsItem[];
  error: string;
}

// initial state
const initialState: NewsState = {
  loading: true,
  data: [],
  error: '',
};

// reducer
const newsReducer = (state = initialState, action: NewsActionTypes) => {
  switch (action.type) {
    case 'FETCH_NEWS_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_NEWS_SUCCESS':
      return { ...state, data: action.payload, loading: false, error: '' };
    case 'FETCH_NEWS_FAILURE':
      return { ...state, data: [], loading: false, error: action.payload };
    default:
      return state;
  }
};

export default newsReducer;

// actions
export const fetchNewsRequest = (): FetchNewsRequest => ({
  type: 'FETCH_NEWS_REQUEST',
});

export const fetchNewsSuccess = (data: NewsItem[]): FetchNewsSuccess => ({
  type: 'FETCH_NEWS_SUCCESS',
  payload: data,
});

export const fetchNewsFailure = (error: string): FetchNewsFailure => ({
  type: 'FETCH_NEWS_FAILURE',
  payload: error,
});

export const fetchNews = (params = '') => {
  return fetchFromAPI(
    'stock_news',
    'news',
    fetchNewsRequest,
    fetchNewsSuccess,
    fetchNewsFailure,
    { params }
  );
};
