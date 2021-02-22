import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWatchlist, addToWatchlist } from '../watchlistSlice';
import { AppState } from '../../../app/rootReducer';

interface Props {
  symbol: string;
}

const QuoteWatchlistBtnContainer: React.FC<Props> = ({ symbol }) => {
  const dispatch = useDispatch();
  const watchlist = useSelector((state: AppState) => state.watchlist);
  const isInWatchlist = watchlist.includes(symbol);

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

export default QuoteWatchlistBtnContainer;
