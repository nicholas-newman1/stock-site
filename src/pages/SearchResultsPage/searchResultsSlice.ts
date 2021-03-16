import { fetchFromAPI } from '../../common/utils/api';

// types
const FETCH_SEARCH_RESULTS_REQUEST = 'FETCH_SEARCH_RESULTS_REQUEST';
const FETCH_SEARCH_RESULTS_SUCCESS = 'FETCH_SEARCH_RESULTS_SUCCESS';
const FETCH_SEARCH_RESULTS_FAILURE = 'FETCH_SEARCH_RESULTS_FAILURE';

interface FetchSearchResultsRequest {
  type: typeof FETCH_SEARCH_RESULTS_REQUEST;
}
interface FetchSearchResultsSuccess {
  type: typeof FETCH_SEARCH_RESULTS_SUCCESS;
  payload: SearchResult[];
}
interface FetchSearchResultsFailure {
  type: typeof FETCH_SEARCH_RESULTS_FAILURE;
  payload: string;
}

export type SearchResultsActionTypes =
  | FetchSearchResultsRequest
  | FetchSearchResultsSuccess
  | FetchSearchResultsFailure;

interface SearchResultsState {
  loading: boolean;
  data: SearchResult[];
  error: string;
}

// initial state
const initialState: SearchResultsState = {
  loading: true,
  data: [],
  error: '',
};

// reducer
const searchResultsReducer = (
  state = initialState,
  action: SearchResultsActionTypes
) => {
  switch (action.type) {
    case 'FETCH_SEARCH_RESULTS_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SEARCH_RESULTS_SUCCESS':
      return { ...state, data: action.payload, loading: false, error: '' };
    case 'FETCH_SEARCH_RESULTS_FAILURE':
      return { ...state, data: [], loading: false, error: action.payload };
    default:
      return state;
  }
};

export default searchResultsReducer;

// actions
export const fetchSearchResultsRequest = (): FetchSearchResultsRequest => ({
  type: 'FETCH_SEARCH_RESULTS_REQUEST',
});

export const fetchSearchResultsSuccess = (
  data: SearchResult[]
): FetchSearchResultsSuccess => ({
  type: 'FETCH_SEARCH_RESULTS_SUCCESS',
  payload: data,
});

export const fetchSearchResultsFailure = (
  error: string
): FetchSearchResultsFailure => ({
  type: 'FETCH_SEARCH_RESULTS_FAILURE',
  payload: error,
});

export const fetchSearchResults = (query: string, exchange: Exchange) => {
  return fetchFromAPI(
    'search',
    'searchResults',
    fetchSearchResultsRequest,
    fetchSearchResultsSuccess,
    fetchSearchResultsFailure,
    { params: `query=${query}${exchange && '&exchange=' + exchange}` }
  );
};
