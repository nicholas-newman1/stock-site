import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Spinner from '../../global/Spinner';
import SearchFilter from './SearchFilter';
import SearchItem from './SearchItem';
import SearchNav from './searchNav';
import Heading from '../../global/heading/Heading';
import BottomNews from '../../global/bottomNews/BottomNews';
import { dummySearchResults } from '../../../dummyData';
import useFetch from '../../../hooks/useFetch';
import './searchResultsPage.css';

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

      {loading ? (
        <Spinner />
      ) : data.length > 0 ? (
        <>
          <SearchFilter setExchange={setExchange} />
          <ul className='search-results-page'>
            {data.map((result, i) => {
              const itemInRange =
                i <= offset + resultsPerPage - 1 && i >= offset;
              return (
                itemInRange && (
                  <SearchItem result={result} key={result.symbol} />
                )
              );
            })}
          </ul>
          {data.length > resultsPerPage && (
            <SearchNav
              searchResults={data}
              page={page}
              setPage={setPage}
              resultsPerPage={resultsPerPage}
            />
          )}
        </>
      ) : (
        <h2>No Results Found For '{query}'</h2>
      )}
      <BottomNews />
    </>
  );
};

export default SearchResults;
