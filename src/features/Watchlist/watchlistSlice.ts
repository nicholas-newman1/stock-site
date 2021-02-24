import { Dispatch } from 'redux';
import { AppState } from '../../app/rootReducer';
import { AppActions } from '../../common/types/actionTypes';
import { Quote } from '../../common/types/APITypes';
import { fetchFromAPI } from '../../common/utils/api';
import { getFromLocalStorage } from '../../common/utils/helpers';

// types
const ADD_TO_WATCHLIST = 'ADD_TO_WATCHLIST';
const REMOVE_FROM_WATCHLIST = 'REMOVE_FROM_WATCHLIST';
const FETCH_WATCHLIST_REQUEST = 'FETCH_WATCHLIST_REQUEST';
const FETCH_WATCHLIST_SUCCESS = 'FETCH_WATCHLIST_SUCCESS';
const FETCH_WATCHLIST_FAILURE = 'FETCH_WATCHLIST_FAILURE';

export interface AddToWatchlist {
  type: typeof ADD_TO_WATCHLIST;
  payload: string;
}

export interface RemoveFromWatchlist {
  type: typeof REMOVE_FROM_WATCHLIST;
  payload: string;
}

interface FetchWatchlistRequest {
  type: typeof FETCH_WATCHLIST_REQUEST;
}
interface FetchWatchlistSuccess {
  type: typeof FETCH_WATCHLIST_SUCCESS;
  payload: Quote[];
}
interface FetchWatchlistFailure {
  type: typeof FETCH_WATCHLIST_FAILURE;
  payload: string;
}

export type WatchlistActionTypes =
  | AddToWatchlist
  | RemoveFromWatchlist
  | FetchWatchlistRequest
  | FetchWatchlistSuccess
  | FetchWatchlistFailure;

// initial state
const LOCAL_STORAGE_KEY = 'WATCHLIST';

interface WatchlistState {
  loading: boolean;
  data: Quote[];
  error: string;
  items: string[];
}

const initialState: WatchlistState = {
  loading: true,
  data: [],
  error: '',
  items: getFromLocalStorage(LOCAL_STORAGE_KEY, []),
};

// reducer
const watchlistReducer = (
  state = initialState,
  action: WatchlistActionTypes
) => {
  let newState;
  switch (action.type) {
    case 'ADD_TO_WATCHLIST':
      action.payload.replace('^', '%5E');
      newState = { ...state, items: [...state.items, action.payload] };
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newState.items));
      return newState;
    case 'REMOVE_FROM_WATCHLIST':
      action.payload.replace('^', '%5E');
      newState = {
        ...state,
        items: state.items.filter((symbol) => symbol !== action.payload),
      };
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newState.items));
      return newState;
    case 'FETCH_WATCHLIST_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_WATCHLIST_SUCCESS':
      return { ...state, data: action.payload, loading: false, error: '' };
    case 'FETCH_WATCHLIST_FAILURE':
      return { ...state, data: [], loading: false, error: action.payload };
    default:
      return state;
  }
};

export default watchlistReducer;

export const addToWatchlist = (symbol: string): AddToWatchlist => ({
  type: 'ADD_TO_WATCHLIST',
  payload: symbol,
});

export const removeFromWatchlist = (symbol: string): RemoveFromWatchlist => ({
  type: 'REMOVE_FROM_WATCHLIST',
  payload: symbol,
});

export const fetchWatchlistRequest = (): FetchWatchlistRequest => ({
  type: 'FETCH_WATCHLIST_REQUEST',
});

export const fetchWatchlistSuccess = (
  data: Quote[]
): FetchWatchlistSuccess => ({
  type: 'FETCH_WATCHLIST_SUCCESS',
  payload: data,
});

export const fetchWatchlistFailure = (
  error: string
): FetchWatchlistFailure => ({
  type: 'FETCH_WATCHLIST_FAILURE',
  payload: error,
});

export const fetchWatchlist = () => {
  return (dispatch: Dispatch<AppActions>, getState: AppState) =>
    fetchFromAPI(
      `quotes/${getState.watchlist.items.join()}`,
      'watchlist',
      fetchWatchlistRequest,
      fetchWatchlistSuccess,
      fetchWatchlistFailure
    );
};
