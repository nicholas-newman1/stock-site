import React, { useContext } from 'react';
import { WatchlistContext } from '../../../../context/WatchlistContext';
import './quoteWatchlistBtn.css';

const QuoteWatchlistBtn = ({ symbol }) => {
  const { watchlist, updateWatchlist } = useContext(WatchlistContext);

  return (
    <button
      className='quote-watchlist-btn'
      onClick={() => updateWatchlist(symbol)}
    >
      {watchlist.includes(symbol)
        ? 'Remove From Watchlist'
        : 'Add to Watchlist'}
    </button>
  );
};

export default QuoteWatchlistBtn;
