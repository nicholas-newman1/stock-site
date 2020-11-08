import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/search/searchItem.css';

const SearchResultsItem = ({ result }) => {
  const { symbol, name, exchangeShortName } = result;
  return (
    <li className='result' key={symbol}>
      <div className='result-content'>
        <h2 className='result-heading'>
          <Link className='result-link' to={`/quote/${symbol}`}>
            {symbol} ({exchangeShortName})
          </Link>
        </h2>
        <p className='result-desc'>{name}</p>
      </div>
      <div className='result-btns-container'>
        <button className='result-quote-btn'>
          <Link className='result-quote-link' to={`/quote/${symbol}`}>
            View Quote
          </Link>{' '}
        </button>
        <button className='result-watchlist-btn'>Add to Watchlist</button>
      </div>
    </li>
  );
};

export default SearchResultsItem;
