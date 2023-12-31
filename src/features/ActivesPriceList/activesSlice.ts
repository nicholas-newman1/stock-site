import { fetchFromAPI } from '../../common/utils/api';

// types
const FETCH_ACTIVES_REQUEST = 'FETCH_ACTIVES_REQUEST';
const FETCH_ACTIVES_SUCCESS = 'FETCH_ACTIVES_SUCCESS';
const FETCH_ACTIVES_FAILURE = 'FETCH_ACTIVES_FAILURE';

interface FetchActivesRequest {
  type: typeof FETCH_ACTIVES_REQUEST;
}
interface FetchActivesSuccess {
  type: typeof FETCH_ACTIVES_SUCCESS;
  payload: MarketQuote[];
}
interface FetchActivesFailure {
  type: typeof FETCH_ACTIVES_FAILURE;
  payload: string;
}

export type ActivesActionTypes =
  | FetchActivesRequest
  | FetchActivesSuccess
  | FetchActivesFailure;

interface ActivesState {
  loading: boolean;
  data: MarketQuote[];
  error: string;
}

// initial state
const initialState: ActivesState = {
  loading: true,
  data: [],
  error: '',
};

// reducer
const activesReducer = (state = initialState, action: ActivesActionTypes) => {
  switch (action.type) {
    case 'FETCH_ACTIVES_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_ACTIVES_SUCCESS':
      return { ...state, data: action.payload, loading: false, error: '' };
    case 'FETCH_ACTIVES_FAILURE':
      return { ...state, data: [], loading: false, error: action.payload };
    default:
      return state;
  }
};

export default activesReducer;

// actions
export const fetchActivesRequest = (): FetchActivesRequest => ({
  type: 'FETCH_ACTIVES_REQUEST',
});

export const fetchActivesSuccess = (
  data: MarketQuote[]
): FetchActivesSuccess => ({
  type: 'FETCH_ACTIVES_SUCCESS',
  payload: data,
});

export const fetchActivesFailure = (error: string): FetchActivesFailure => ({
  type: 'FETCH_ACTIVES_FAILURE',
  payload: error,
});

export const fetchActives = () => {
  return fetchFromAPI(
    'actives',
    'actives',
    fetchActivesRequest,
    fetchActivesSuccess,
    fetchActivesFailure
  );
};
