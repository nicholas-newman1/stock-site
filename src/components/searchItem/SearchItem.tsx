import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  addToWatchlist,
  removeFromWatchlist,
} from '../../actions/watchlistActions';
import { AppState } from '../../reducers/rootReducer';
import './searchItem.css';

interface Props {
  result: SearchResult;
}

const SearchResultsItem: React.FC<Props> = ({ result }) => {
  const { symbol, name, exchangeShortName } = result;
  const dispatch = useDispatch();
  const watchlist = useSelector((state: AppState) => state.watchlist);
  const isInWatchlist = watchlist.includes(symbol);

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
          onClick={() =>
            isInWatchlist
              ? dispatch(removeFromWatchlist(symbol))
              : dispatch(addToWatchlist(symbol))
          }
        >
          {isInWatchlist ? 'Remove From Watchlist' : 'Add to Watchlist'}
        </button>
      </div>
    </li>
  );
};

export default SearchResultsItem;
