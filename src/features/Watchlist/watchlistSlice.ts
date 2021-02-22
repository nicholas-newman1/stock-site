import { getFromLocalStorage } from '../../common/utils/helpers';

// types
const ADD_TO_WATCHLIST = 'ADD_TO_WATCHLIST';
const REMOVE_FROM_WATCHLIST = 'REMOVE_FROM_WATCHLIST';

export interface AddToWatchlist {
  type: typeof ADD_TO_WATCHLIST;
  payload: string;
}

export interface RemoveFromWatchlist {
  type: typeof REMOVE_FROM_WATCHLIST;
  payload: string;
}

export type WatchlistActionTypes = AddToWatchlist | RemoveFromWatchlist;

// initial state
const LOCAL_STORAGE_KEY = 'WATCHLIST';

const initialState: string[] = getFromLocalStorage(
  LOCAL_STORAGE_KEY,
  [] as string[]
);

// reducer
const watchlistReducer = (
  state = initialState,
  action: WatchlistActionTypes
) => {
  let newState;
  switch (action.type) {
    case 'ADD_TO_WATCHLIST':
      action.payload.replace('^', '%5E');
      newState = [...state, action.payload];
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newState));
      return newState;
    case 'REMOVE_FROM_WATCHLIST':
      action.payload.replace('^', '%5E');
      newState = state.filter((symbol) => symbol !== action.payload);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newState));
      return newState;
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
