import React, { useEffect, useState, useContext } from 'react';
import { SearchContext } from '../context/SearchContext';
import SearchResult from './SearchResult';
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
      {searchResults.map((result) => (
        <SearchResult key={result.symbol} result={result} />
      ))}
    </ul>
  );
};

export default SearchResults;
