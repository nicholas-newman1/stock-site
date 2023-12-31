import { fetchFromAPI } from '../../common/utils/api';

// types
const FETCH_LOSERS_REQUEST = 'FETCH_LOSERS_REQUEST';
const FETCH_LOSERS_SUCCESS = 'FETCH_LOSERS_SUCCESS';
const FETCH_LOSERS_FAILURE = 'FETCH_LOSERS_FAILURE';

interface FetchLosersRequest {
  type: typeof FETCH_LOSERS_REQUEST;
}
interface FetchLosersSuccess {
  type: typeof FETCH_LOSERS_SUCCESS;
  payload: MarketQuote[];
}
interface FetchLosersFailure {
  type: typeof FETCH_LOSERS_FAILURE;
  payload: string;
}

export type LosersActionTypes =
  | FetchLosersRequest
  | FetchLosersSuccess
  | FetchLosersFailure;

interface LosersState {
  loading: boolean;
  data: MarketQuote[];
  error: string;
}

// initial state
const initialState: LosersState = {
  loading: true,
  data: [],
  error: '',
};

// reducer
const losersReducer = (state = initialState, action: LosersActionTypes) => {
  switch (action.type) {
    case 'FETCH_LOSERS_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_LOSERS_SUCCESS':
      return { ...state, data: action.payload, loading: false, error: '' };
    case 'FETCH_LOSERS_FAILURE':
      return { ...state, data: [], loading: false, error: action.payload };
    default:
      return state;
  }
};

export default losersReducer;

// actions
export const fetchLosersRequest = (): FetchLosersRequest => ({
  type: 'FETCH_LOSERS_REQUEST',
});

export const fetchLosersSuccess = (
  data: MarketQuote[]
): FetchLosersSuccess => ({
  type: 'FETCH_LOSERS_SUCCESS',
  payload: data,
});

export const fetchLosersFailure = (error: string): FetchLosersFailure => ({
  type: 'FETCH_LOSERS_FAILURE',
  payload: error,
});

export const fetchLosers = () => {
  return fetchFromAPI(
    'losers',
    'losers',
    fetchLosersRequest,
    fetchLosersSuccess,
    fetchLosersFailure
  );
};
