import { Quote } from '../../common/types/APITypes';
import { fetchFromAPI } from '../../common/utils/api';

// types
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

interface PriceOverviewState {
  loading: boolean;
  data: Quote[];
  error: string;
}

// initial state
const initialState: PriceOverviewState = {
  loading: true,
  data: [],
  error: '',
};

// reducer
const priceOverviewReducer = (
  state = initialState,
  action: PriceOverviewActionTypes
) => {
  switch (action.type) {
    case 'FETCH_PRICE_OVERVIEW_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_PRICE_OVERVIEW_SUCCESS':
      return { ...state, data: action.payload, loading: false, error: '' };
    case 'FETCH_PRICE_OVERVIEW_FAILURE':
      return { ...state, data: [], loading: false, error: action.payload };
    default:
      return state;
  }
};

export default priceOverviewReducer;

const fetchPriceOverviewRequest = (): FetchPriceOverviewRequest => ({
  type: 'FETCH_PRICE_OVERVIEW_REQUEST',
});
const fetchPriceOverviewSuccess = (
  data: Quote[]
): FetchPriceOverviewSuccess => ({
  type: 'FETCH_PRICE_OVERVIEW_SUCCESS',
  payload: data,
});
const fetchPriceOverviewFailure = (
  error: string
): FetchPriceOverviewFailure => ({
  type: 'FETCH_PRICE_OVERVIEW_FAILURE',
  payload: error,
});

export const fetchPriceOverviewData = (symbols: string[]) => {
  return fetchFromAPI(
    `quote/${symbols.join()}`,
    'priceOverview',
    fetchPriceOverviewRequest,
    fetchPriceOverviewSuccess,
    fetchPriceOverviewFailure
  );
};
