import React from 'react';
import './quoteWatchlistBtn.css';

interface Props {
  onClick: () => void;
}

const QuoteWatchlistBtn: React.FC<Props> = ({ children, onClick }) => {
  return (
    <button className='quote-watchlist-btn' onClick={onClick}>
      {children}
    </button>
  );
};

export default QuoteWatchlistBtn;
