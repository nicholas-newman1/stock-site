import { Quote } from '../../common/types/APITypes';
import { fetchFromAPI } from '../../common/utils/api';

// types
const FETCH_FOREX_REQUEST = 'FETCH_FOREX_REQUEST';
const FETCH_FOREX_SUCCESS = 'FETCH_FOREX_SUCCESS';
const FETCH_FOREX_FAILURE = 'FETCH_FOREX_FAILURE';

interface FetchForexRequest {
  type: typeof FETCH_FOREX_REQUEST;
}
interface FetchForexSuccess {
  type: typeof FETCH_FOREX_SUCCESS;
  payload: Quote[];
}
interface FetchForexFailure {
  type: typeof FETCH_FOREX_FAILURE;
  payload: string;
}

export type ForexActionTypes =
  | FetchForexRequest
  | FetchForexSuccess
  | FetchForexFailure;

interface ForexState {
  loading: boolean;
  data: Quote[];
  error: string;
}

// initial state
const initialState: ForexState = {
  loading: true,
  data: [],
  error: '',
};

// reducer
const forexReducer = (state = initialState, action: ForexActionTypes) => {
  switch (action.type) {
    case 'FETCH_FOREX_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_FOREX_SUCCESS':
      return { ...state, data: action.payload, loading: false, error: '' };
    case 'FETCH_FOREX_FAILURE':
      return { ...state, data: [], loading: false, error: action.payload };
    default:
      return state;
  }
};

export default forexReducer;

// actions
export const fetchForexRequest = (): FetchForexRequest => ({
  type: 'FETCH_FOREX_REQUEST',
});

export const fetchForexSuccess = (data: Quote[]): FetchForexSuccess => ({
  type: 'FETCH_FOREX_SUCCESS',
  payload: data,
});

export const fetchForexFailure = (error: string): FetchForexFailure => ({
  type: 'FETCH_FOREX_FAILURE',
  payload: error,
});

export const fetchForex = () => {
  return fetchFromAPI(
    'quotes/forex',
    'forex',
    fetchForexRequest,
    fetchForexSuccess,
    fetchForexFailure
  );
};
