import { fetchFromAPI } from '../../common/utils/api';

// types
const FETCH_MAIN_NEWS_ITEM_REQUEST = 'FETCH_MAIN_NEWS_ITEM_REQUEST';
const FETCH_MAIN_NEWS_ITEM_SUCCESS = 'FETCH_MAIN_NEWS_ITEM_SUCCESS';
const FETCH_MAIN_NEWS_ITEM_FAILURE = 'FETCH_MAIN_NEWS_ITEM_FAILURE';

interface FetchMainNewsItemRequest {
  type: typeof FETCH_MAIN_NEWS_ITEM_REQUEST;
}
interface FetchMainNewsItemSuccess {
  type: typeof FETCH_MAIN_NEWS_ITEM_SUCCESS;
  payload: NewsItem[];
}
interface FetchMainNewsItemFailure {
  type: typeof FETCH_MAIN_NEWS_ITEM_FAILURE;
  payload: string;
}

export type MainNewsItemActionTypes =
  | FetchMainNewsItemRequest
  | FetchMainNewsItemSuccess
  | FetchMainNewsItemFailure;

interface MainNewsItemState {
  loading: boolean;
  data: NewsItem;
  error: string;
}

// initial state
const initialState: MainNewsItemState = {
  loading: true,
  data: {} as NewsItem,
  error: '',
};

// reducer
const mainNewsItemReducer = (
  state = initialState,
  action: MainNewsItemActionTypes
) => {
  switch (action.type) {
    case 'FETCH_MAIN_NEWS_ITEM_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_MAIN_NEWS_ITEM_SUCCESS':
      return { ...state, data: action.payload[0], loading: false, error: '' };
    case 'FETCH_MAIN_NEWS_ITEM_FAILURE':
      return { ...state, data: [], loading: false, error: action.payload };
    default:
      return state;
  }
};

export default mainNewsItemReducer;

// actions
export const fetchMainNewsItemRequest = (): FetchMainNewsItemRequest => ({
  type: 'FETCH_MAIN_NEWS_ITEM_REQUEST',
});

export const fetchMainNewsItemSuccess = (
  data: NewsItem[]
): FetchMainNewsItemSuccess => ({
  type: 'FETCH_MAIN_NEWS_ITEM_SUCCESS',
  payload: data,
});

export const fetchMainNewsItemFailure = (
  error: string
): FetchMainNewsItemFailure => ({
  type: 'FETCH_MAIN_NEWS_ITEM_FAILURE',
  payload: error,
});

export const fetchMainNewsItem = () => {
  return fetchFromAPI(
    'stock_news',
    'news',
    fetchMainNewsItemRequest,
    fetchMainNewsItemSuccess,
    fetchMainNewsItemFailure,
    { params: 'limit=1&tickers=AAPL,FB,AMZN,TSLA' }
  );
};
