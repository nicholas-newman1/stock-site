import React from 'react';
import { Link } from 'react-router-dom';
import './searchResultItem.css';

interface Props {
  result: SearchResult;
  isInWatchlist: boolean;
  addToWatchlist: () => void;
  removeFromWatchlist: () => void;
}

const SearchResultItem: React.FC<Props> = ({
  result,
  isInWatchlist,
  addToWatchlist,
  removeFromWatchlist,
}) => {
  const { symbol, name, exchangeShortName } = result;

  return (
    <li className='search-result-item' key={symbol}>
      <div className='search-result-item__content'>
        <h2 className='search-result-item__heading'>
          <Link className='search-result-item__link' to={`/quote/${symbol}`}>
            {symbol} ({exchangeShortName})
          </Link>
        </h2>
        <p className='search-result-item__desc'>{name}</p>
      </div>
      <div className='search-result-item__btns-container'>
        <Link className='btn btn-blue' to={`/quote/${symbol}`}>
          View Quote
        </Link>{' '}
        <button
          className='btn btn-outline-blue'
          onClick={() =>
            isInWatchlist ? removeFromWatchlist() : addToWatchlist()
          }
        >
          {isInWatchlist ? 'Remove From Watchlist' : 'Add to Watchlist'}
        </button>
      </div>
    </li>
  );
};

export default SearchResultItem;
