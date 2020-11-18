import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Spinner from '../../global/Spinner';
import SearchResultsFilter from './SearchFilter';
import './searchResults.css';
import SearchResultsItem from './SearchItem';
import SearchResultsNav from './searchNav';

const SearchResults = ({ match }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [exchange, setExchange] = useState('');
  const [page, setPage] = useState(0);
  const [resultsPerPage] = useState(10);
  const offset = page * resultsPerPage;
  const query = match.params.query;

  const fetchSearchResults = async () => {
    setLoading(true);
    const res = await fetch(
      `https://financialmodelingprep.com/api/v3/search?query=${query}${
        exchange && '&exchange=' + exchange
      }&apikey=${process.env.REACT_APP_FMP_KEY}`
    );
    const data = await res.json();
    setSearchResults(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchSearchResults();
    // eslint-disable-next-line
  }, [match.params.query, exchange]);

  return (
    <>
      <Helmet>
        <title>{query} Search Results | Finance App</title>
        <meta
          name='description'
          content={`Search results for ${query}. Free stock quotes, forex exchange rates, cryptocurrency rates, and more.`}
        />
      </Helmet>
      <SearchResultsFilter setExchange={setExchange} />
      {loading ? (
        <Spinner />
      ) : searchResults.length > 0 ? (
        <>
          <ul className='results-container'>
            {searchResults.map((result, i) => {
              const itemInRange =
                i <= offset + resultsPerPage - 1 && i >= offset;
              return (
                itemInRange && (
                  <SearchResultsItem result={result} key={result.symbol} />
                )
              );
            })}
          </ul>
          {searchResults.length > resultsPerPage && (
            <SearchResultsNav
              searchResults={searchResults}
              page={page}
              setPage={setPage}
              resultsPerPage={resultsPerPage}
            />
          )}
        </>
      ) : (
        <h2>No Data Available</h2>
      )}
    </>
  );
};

export default SearchResults;
