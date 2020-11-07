import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from './global/Spinner';
import '../css/searchResults.css';

const SearchResults = ({ match }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchSearchResults = async () => {
    setLoading(true);
    const res = await fetch(
      `https://financialmodelingprep.com/api/v3/search?query=${match.params.query}&limit=10&apikey=${process.env.REACT_APP_FMP_KEY}`
    );
    const data = await res.json();
    setSearchResults(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchSearchResults();
    // eslint-disable-next-line
  }, [match.params.query]);

  return loading ? (
    <Spinner />
  ) : (
    <ul className='results'>
      {searchResults.map(({ symbol, name, exchangeShortName }) => (
        <li className='result' key={symbol}>
          <div className='result-content'>
            <h2 className='result-heading'>
              <Link className='result-link' to={`/quote/${symbol}`}>
                {symbol} ({exchangeShortName})
              </Link>
            </h2>
            <p className='result-desc'>{name}</p>
          </div>
          <div>
            <button className='view-quote-btn'>
              <Link className='view-quote-link' to={`/quote/${symbol}`}>
                View Quote
              </Link>{' '}
            </button>
            <button className='save-result-btn'>Add to Watchlist</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;
