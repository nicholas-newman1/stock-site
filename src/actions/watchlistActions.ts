import { AddToWatchlist, RemoveFromWatchlist } from '../types/actionTypes';

export const addToWatchlist = (symbol: string): AddToWatchlist => ({
  type: 'ADD_TO_WATCHLIST',
  payload: symbol,
});

export const removeFromWatchlist = (symbol: string): RemoveFromWatchlist => ({
  type: 'REMOVE_FROM_WATCHLIST',
  payload: symbol,
});
