import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWatchlist, addToWatchlist } from '../watchlistSlice';
import { AppState } from '../../../app/rootReducer';

interface Props {
  symbol: string;
}

const WatchlistBtnContainer: React.FC<Props> = ({ symbol }) => {
  const dispatch = useDispatch();
  const watchlistItems = useSelector(
    (state: AppState) => state.watchlist.items
  );
  const isInWatchlist = watchlistItems.includes(symbol);

  return (
    <button
      className='btn btn-outline-blue'
      onClick={() =>
        isInWatchlist
          ? dispatch(removeFromWatchlist(symbol))
          : dispatch(addToWatchlist(symbol))
      }
    >
      {isInWatchlist ? 'Remove From Watchlist' : 'Add to Watchlist'}
    </button>
  );
};

export default WatchlistBtnContainer;
