import React from 'react';
import { Link } from 'react-router-dom';

const SearchResultsItem = ({ result }) => {
  const { symbol, name, exchangeShortName } = result;
  return (
    <li className='result' key={symbol}>
      <div className='results-content'>
        <h2 className='results-heading'>
          <Link className='results-link' to={`/quote/${symbol}`}>
            {symbol} ({exchangeShortName})
          </Link>
        </h2>
        <p className='results-desc'>{name}</p>
      </div>
      <div className='results-btns-container'>
        <button className='results-quote-btn'>
          <Link className='results-quote-link' to={`/quote/${symbol}`}>
            View Quote
          </Link>{' '}
        </button>
        <button className='results-watchlist-btn'>Add to Watchlist</button>
      </div>
    </li>
  );
};

export default SearchResultsItem;
