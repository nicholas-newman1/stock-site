import React, { useEffect, useState, useContext } from 'react';
import { SearchContext } from '../context/SearchContext';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';

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
    <ul>
      {searchResults.map(({ symbol, securityName, exchange }) => (
        <li key={symbol}>
          <h2>
            <Link to={`/stocks/${symbol}`}>
              {symbol} ({exchange})
            </Link>
          </h2>
          <h3>{securityName}</h3>
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;
