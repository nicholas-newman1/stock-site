import { fetchFromAPI } from '../../common/utils/api';
import { getDummyData, getEndpoint } from './helpers';

// types
const FETCH_HISTORIAL_PRICES_REQUEST = 'FETCH_HISTORIAL_PRICES_REQUEST';
const FETCH_HISTORIAL_PRICES_SUCCESS = 'FETCH_HISTORIAL_PRICES_SUCCESS';
const FETCH_HISTORIAL_PRICES_FAILURE = 'FETCH_HISTORIAL_PRICES_FAILURE';

export interface FetchHistoricalPricesRequest {
  type: typeof FETCH_HISTORIAL_PRICES_REQUEST;
}
export interface FetchHistoricalPricesSuccess {
  type: typeof FETCH_HISTORIAL_PRICES_SUCCESS;
  payload: HistoricalPrices | { symbol: string; historical: HistoricalPrices };
}
export interface FetchHistoricalPricesFailure {
  type: typeof FETCH_HISTORIAL_PRICES_FAILURE;
  payload: string;
}

export type HistoricalPricesActionTypes =
  | FetchHistoricalPricesRequest
  | FetchHistoricalPricesSuccess
  | FetchHistoricalPricesFailure;

interface HistoricalPricesState {
  loading: boolean;
  data: HistoricalPrices | { symbol: string; historical: HistoricalPrices };
  error: string;
}

// initial state
const initialState: HistoricalPricesState = {
  loading: true,
  data: [],
  error: '',
};

// reducer
const quoteChartReducer = (
  state = initialState,
  action: HistoricalPricesActionTypes
) => {
  switch (action.type) {
    case 'FETCH_HISTORIAL_PRICES_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_HISTORIAL_PRICES_SUCCESS':
      return { ...state, data: action.payload, loading: false, error: '' };
    case 'FETCH_HISTORIAL_PRICES_FAILURE':
      return { ...state, data: [], loading: false, error: action.payload };
    default:
      return state;
  }
};

export default quoteChartReducer;

const fetchHistoricalPricesRequest = (): FetchHistoricalPricesRequest => ({
  type: 'FETCH_HISTORIAL_PRICES_REQUEST',
});
const fetchHistoricalPricesSuccess = (
  data: HistoricalPrices | { symbol: string; historical: HistoricalPrices }
): FetchHistoricalPricesSuccess => ({
  type: 'FETCH_HISTORIAL_PRICES_SUCCESS',
  payload: data,
});
const fetchHistoricalPricesFailure = (
  error: string
): FetchHistoricalPricesFailure => ({
  type: 'FETCH_HISTORIAL_PRICES_FAILURE',
  payload: error,
});

export const fetchHistoricalPricesData = (
  symbol: string,
  timeframe: Timeframe
) => {
  return fetchFromAPI(
    getEndpoint(symbol, timeframe),
    getDummyData(timeframe),
    fetchHistoricalPricesRequest,
    fetchHistoricalPricesSuccess,
    fetchHistoricalPricesFailure
  );
};
