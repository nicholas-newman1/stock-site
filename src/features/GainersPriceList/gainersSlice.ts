import { fetchFromAPI } from '../../common/utils/api';

// types
const FETCH_GAINERS_REQUEST = 'FETCH_GAINERS_REQUEST';
const FETCH_GAINERS_SUCCESS = 'FETCH_GAINERS_SUCCESS';
const FETCH_GAINERS_FAILURE = 'FETCH_GAINERS_FAILURE';

interface FetchGainersRequest {
  type: typeof FETCH_GAINERS_REQUEST;
}
interface FetchGainersSuccess {
  type: typeof FETCH_GAINERS_SUCCESS;
  payload: MarketQuote[];
}
interface FetchGainersFailure {
  type: typeof FETCH_GAINERS_FAILURE;
  payload: string;
}

export type GainersActionTypes =
  | FetchGainersRequest
  | FetchGainersSuccess
  | FetchGainersFailure;

interface GainersState {
  loading: boolean;
  data: MarketQuote[];
  error: string;
}

// initial state
const initialState: GainersState = {
  loading: true,
  data: [],
  error: '',
};

// reducer
const gainersReducer = (state = initialState, action: GainersActionTypes) => {
  switch (action.type) {
    case 'FETCH_GAINERS_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_GAINERS_SUCCESS':
      return { ...state, data: action.payload, loading: false, error: '' };
    case 'FETCH_GAINERS_FAILURE':
      return { ...state, data: [], loading: false, error: action.payload };
    default:
      return state;
  }
};

export default gainersReducer;

// actions
export const fetchGainersRequest = (): FetchGainersRequest => ({
  type: 'FETCH_GAINERS_REQUEST',
});

export const fetchGainersSuccess = (
  data: MarketQuote[]
): FetchGainersSuccess => ({
  type: 'FETCH_GAINERS_SUCCESS',
  payload: data,
});

export const fetchGainersFailure = (error: string): FetchGainersFailure => ({
  type: 'FETCH_GAINERS_FAILURE',
  payload: error,
});

export const fetchGainers = () => {
  return fetchFromAPI(
    'gainers',
    'gainers',
    fetchGainersRequest,
    fetchGainersSuccess,
    fetchGainersFailure
  );
};
