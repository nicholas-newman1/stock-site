import { fetchFromAPI } from '../../common/utils/api';
import { getDummyData } from './helpers';

// types
const FETCH_FINANCIALS_REQUEST = 'FETCH_FINANCIALS_REQUEST';
const FETCH_FINANCIALS_SUCCESS = 'FETCH_FINANCIALS_SUCCESS';
const FETCH_FINANCIALS_FAILURE = 'FETCH_FINANCIALS_FAILURE';

interface FetchFinancialsRequest {
  type: typeof FETCH_FINANCIALS_REQUEST;
}
interface FetchFinancialsSuccess {
  type: typeof FETCH_FINANCIALS_SUCCESS;
  payload: KeyValueObject[];
}
interface FetchFinancialsFailure {
  type: typeof FETCH_FINANCIALS_FAILURE;
  payload: string;
}

export type FinancialsActionTypes =
  | FetchFinancialsRequest
  | FetchFinancialsSuccess
  | FetchFinancialsFailure;

interface FinancialsState {
  loading: boolean;
  data: KeyValueObject[];
  error: string;
}

// initial state
const initialState: FinancialsState = {
  loading: true,
  data: [],
  error: '',
};

// reducer
const quoteFinancialsReducer = (
  state = initialState,
  action: FinancialsActionTypes
) => {
  switch (action.type) {
    case 'FETCH_FINANCIALS_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_FINANCIALS_SUCCESS':
      return { ...state, data: action.payload, loading: false, error: '' };
    case 'FETCH_FINANCIALS_FAILURE':
      return { ...state, data: [], loading: false, error: action.payload };
    default:
      return state;
  }
};

export default quoteFinancialsReducer;

// actions
export const fetchFinancialsRequest = (): FetchFinancialsRequest => ({
  type: 'FETCH_FINANCIALS_REQUEST',
});

export const fetchFinancialsSuccess = (
  data: KeyValueObject[]
): FetchFinancialsSuccess => ({
  type: 'FETCH_FINANCIALS_SUCCESS',
  payload: data,
});

export const fetchFinancialsFailure = (
  error: string
): FetchFinancialsFailure => ({
  type: 'FETCH_FINANCIALS_FAILURE',
  payload: error,
});

export const fetchFinancials = (
  symbol: string,
  statement: Statement,
  period: Period
) => {
  return fetchFromAPI(
    `${statement}/${symbol}`,
    getDummyData(statement, period),
    fetchFinancialsRequest,
    fetchFinancialsSuccess,
    fetchFinancialsFailure,
    { params: `period=${period}` }
  );
};
