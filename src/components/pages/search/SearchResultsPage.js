import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Spinner from '../../global/Spinner';
import SearchResultsFilter from './SearchFilter';
import './searchResults.css';
import SearchResultsItem from './SearchItem';
import SearchResultsNav from './searchNav';
import Heading from '../../global/heading/Heading';
import { dummySearchResults } from '../../../dummyData';
import useFetch from '../../../hooks/useFetch';

const SearchResults = ({ match }) => {
  const [exchange, setExchange] = useState('');
  const [page, setPage] = useState(0);
  const [resultsPerPage] = useState(10);
  const offset = page * resultsPerPage;
  const query = match.params.query;

  const { data, loading } = useFetch(
    [], // initial value
    'search', // endpoint
    dummySearchResults, // dummy data
    `query=${query}${exchange && '&exchange=' + exchange}`, // parameters
    [match.params.query, exchange] // dependencies
  );

  return (
    <>
      <Helmet>
        <title>{query} Search Results | Finance App</title>
        <meta
          name='description'
          content={`Search results for ${query}. Free stock quotes, forex exchange rates, cryptocurrency rates, and more.`}
        />
      </Helmet>
      <Heading text='Search Results' />
      <SearchResultsFilter setExchange={setExchange} />
      {loading ? (
        <Spinner />
      ) : data.length > 0 ? (
        <>
          <ul className='results-container'>
            {data.map((result, i) => {
              const itemInRange =
                i <= offset + resultsPerPage - 1 && i >= offset;
              return (
                itemInRange && (
                  <SearchResultsItem result={result} key={result.symbol} />
                )
              );
            })}
          </ul>
          {data.length > resultsPerPage && (
            <SearchResultsNav
              searchResults={data}
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
