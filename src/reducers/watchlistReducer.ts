import { WatchlistActionTypes } from '../types/actionTypes';

function getFromLocalStorage<T>(key: string, fallbackValue: T): T {
  const savedValue = localStorage.getItem(key);
  if (savedValue) return JSON.parse(savedValue);
  if (fallbackValue instanceof Function) return fallbackValue();
  return fallbackValue;
}

const LOCAL_STORAGE_KEY = 'WATCHLIST';

const initialState: string[] = getFromLocalStorage(
  LOCAL_STORAGE_KEY,
  [] as string[]
);

export const watchlistReducer = (
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
