import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToWatchlist,
  removeFromWatchlist,
} from '../../actions/watchlistActions';
import { AppState } from '../../reducers/rootReducer';
import './quoteWatchlistBtn.css';

interface Props {
  symbol: string;
}

const QuoteWatchlistBtn: React.FC<Props> = ({ symbol }) => {
  const dispatch = useDispatch();
  const watchlist = useSelector((state: AppState) => state.watchlist);
  const isInWatchlist = watchlist.includes(symbol);

  return (
    <button
      className='quote-watchlist-btn'
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

export default QuoteWatchlistBtn;
