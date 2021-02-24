import { Quote } from '../../common/types/APITypes';
import { fetchFromAPI } from '../../common/utils/api';

// types
const FETCH_INDEX_REQUEST = 'FETCH_INDEX_REQUEST';
const FETCH_INDEX_SUCCESS = 'FETCH_INDEX_SUCCESS';
const FETCH_INDEX_FAILURE = 'FETCH_INDEX_FAILURE';

interface FetchIndexRequest {
  type: typeof FETCH_INDEX_REQUEST;
}
interface FetchIndexSuccess {
  type: typeof FETCH_INDEX_SUCCESS;
  payload: Quote[];
}
interface FetchIndexFailure {
  type: typeof FETCH_INDEX_FAILURE;
  payload: string;
}

export type IndexActionTypes =
  | FetchIndexRequest
  | FetchIndexSuccess
  | FetchIndexFailure;

interface IndexState {
  loading: boolean;
  data: Quote[];
  error: string;
}

// initial state
const initialState: IndexState = {
  loading: true,
  data: [],
  error: '',
};

// reducer
const indexReducer = (state = initialState, action: IndexActionTypes) => {
  switch (action.type) {
    case 'FETCH_INDEX_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_INDEX_SUCCESS':
      return { ...state, data: action.payload, loading: false, error: '' };
    case 'FETCH_INDEX_FAILURE':
      return { ...state, data: [], loading: false, error: action.payload };
    default:
      return state;
  }
};

export default indexReducer;

// actions
export const fetchIndexRequest = (): FetchIndexRequest => ({
  type: 'FETCH_INDEX_REQUEST',
});

export const fetchIndexSuccess = (data: Quote[]): FetchIndexSuccess => ({
  type: 'FETCH_INDEX_SUCCESS',
  payload: data,
});

export const fetchIndexFailure = (error: string): FetchIndexFailure => ({
  type: 'FETCH_INDEX_FAILURE',
  payload: error,
});

export const fetchIndex = () => {
  return fetchFromAPI(
    'quotes/index',
    'index',
    fetchIndexRequest,
    fetchIndexSuccess,
    fetchIndexFailure
  );
};
