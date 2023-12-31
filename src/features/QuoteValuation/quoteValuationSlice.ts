import { fetchFromAPI } from '../../common/utils/api';

// types
const FETCH_VALUATION_REQUEST = 'FETCH_VALUATION_REQUEST';
const FETCH_VALUATION_SUCCESS = 'FETCH_VALUATION_SUCCESS';
const FETCH_VALUATION_FAILURE = 'FETCH_VALUATION_FAILURE';

interface FetchValuationRequest {
  type: typeof FETCH_VALUATION_REQUEST;
}
interface FetchValuationSuccess {
  type: typeof FETCH_VALUATION_SUCCESS;
  payload: KeyValueObject[];
}
interface FetchValuationFailure {
  type: typeof FETCH_VALUATION_FAILURE;
  payload: string;
}

export type ValuationActionTypes =
  | FetchValuationRequest
  | FetchValuationSuccess
  | FetchValuationFailure;

interface ValuationState {
  loading: boolean;
  data: KeyValueObject[];
  error: string;
}

// initial state
const initialState: ValuationState = {
  loading: true,
  data: [],
  error: '',
};

// reducer
const quoteValuationReducer = (
  state = initialState,
  action: ValuationActionTypes
) => {
  switch (action.type) {
    case 'FETCH_VALUATION_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_VALUATION_SUCCESS':
      return { ...state, data: action.payload, loading: false, error: '' };
    case 'FETCH_VALUATION_FAILURE':
      return { ...state, data: [], loading: false, error: action.payload };
    default:
      return state;
  }
};

export default quoteValuationReducer;

// actions
export const fetchValuationRequest = (): FetchValuationRequest => ({
  type: 'FETCH_VALUATION_REQUEST',
});

export const fetchValuationSuccess = (
  data: KeyValueObject[]
): FetchValuationSuccess => ({
  type: 'FETCH_VALUATION_SUCCESS',
  payload: data,
});

export const fetchValuationFailure = (
  error: string
): FetchValuationFailure => ({
  type: 'FETCH_VALUATION_FAILURE',
  payload: error,
});

export const fetchValuation = (symbol: string, period: Period) => {
  return fetchFromAPI(
    `key-metrics/${symbol}`,
    period === 'quarter' ? 'quarterlyValuation' : 'annualValuation',
    fetchValuationRequest,
    fetchValuationSuccess,
    fetchValuationFailure
  );
};
