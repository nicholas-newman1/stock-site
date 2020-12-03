import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { WatchlistContext } from '../../../context/WatchlistContext';
import './searchItem.css';

const SearchResultsItem = ({ result }) => {
  const { watchlist, updateWatchlist } = useContext(WatchlistContext);
  const { symbol, name, exchangeShortName } = result;

  return (
    <li className='search-result' key={symbol}>
      <div className='search-result__content'>
        <h2 className='search-result__heading'>
          <Link className='search-result__link' to={`/quote/${symbol}`}>
            {symbol} ({exchangeShortName})
          </Link>
        </h2>
        <p className='search-result__desc'>{name}</p>
      </div>
      <div className='search-result__btns-container'>
        <button className='search-result__quote-btn'>
          <Link className='search-result__quote-link' to={`/quote/${symbol}`}>
            View Quote
          </Link>{' '}
        </button>
        <button
          className='search-result__watchlist-btn'
          onClick={() => updateWatchlist(symbol)}
        >
          {watchlist.includes(symbol)
            ? 'Remove From Watchlist'
            : 'Add to Watchlist'}
        </button>
      </div>
    </li>
  );
};

export default SearchResultsItem;
