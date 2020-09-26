import React, { useEffect, useState, useContext } from 'react';
import { SearchContext } from '../context/SearchContext';
import SearchResult from './SearchResult';

const SearchResults = ({ match }) => {
  const { APIKey } = useContext(SearchContext);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch(
      `https://sandbox.iexapis.com/v1/search/${match.params.query}?token=${APIKey}`
    )
      .then((res) => res.json())
      .then((data) => setSearchResults(data));
  }, [match.params.query]);

  return (
    <ul>
      {searchResults.map((result) => (
        <SearchResult key={result.symbol} result={result} />
      ))}
    </ul>
  );
};

export default SearchResults;
