import React, { useContext } from 'react';
import { WatchlistContext } from '../../context/WatchlistContext';
import './quoteWatchlistBtn.css';

interface Props {
  symbol: string;
}

const QuoteWatchlistBtn: React.FC<Props> = ({ symbol }) => {
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
