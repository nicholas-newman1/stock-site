import React, { useEffect, useState, useContext } from 'react';
import { SearchContext } from '../context/SearchContext';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';
import '../css/searchResults.css';

const SearchResults = ({ match }) => {
  const { APIKey } = useContext(SearchContext);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://sandbox.iexapis.com/v1/search/${match.params.query}?token=${APIKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        setSearchResults(data);
        setLoading(false);
      });
  }, [match.params.query, APIKey]);

  return loading ? (
    <Spinner />
  ) : (
    <ul className='results'>
      {searchResults.map(({ symbol, securityName, exchange }) => (
        <li className='result' key={symbol}>
          <div className='result-content'>
            <h2 className='result-heading'>
              <Link className='result-link' to={`/stocks/${symbol}`}>
                {symbol} ({exchange})
              </Link>
            </h2>
            <p className='result-desc'>{securityName}</p>
          </div>
          <button className='save-result-btn'>Add to Watchlist</button>
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;
