import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Spinner from '../../components/Spinner';
import SearchFilter from '../../components/searchFilter/SearchFilter';
import SearchItem from '../../components/searchItem/SearchItem';
import PageNav from '../../components/pageNav/PageNav';
import Heading from '../../components/heading/Heading';
import BottomNews from '../../components/bottomNews/BottomNews';
import { dummySearchResults } from '../../dummyData';
import useFetch from '../../hooks/useFetch';
import useScrollTop from '../../hooks/useScrollTop';
import './searchResultsPage.css';
import { RouteComponentProps } from 'react-router-dom';

interface MatchParams {
  query: string;
}

interface Props extends RouteComponentProps<MatchParams> {}

interface Result {
  symbol: string;
  name: string;
  currency: string;
  stockExchange: string;
  exchangeShortName: string;
}

const SearchResults: React.FC<Props> = ({ match }) => {
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

  useScrollTop(); // scrolls to top of page on component mount

  return (
    <>
      <Helmet>
        <title>{query} | Search Results | Finance App</title>
        <meta
          name='description'
          content={`Search results for ${query}. Free stock quotes, forex exchange rates, cryptocurrency rates, and more.`}
        />
      </Helmet>

      <Heading text='Search Results' />

      <SearchFilter setExchange={setExchange} />

      {loading ? (
        <Spinner />
      ) : data.length > 0 ? (
        <>
          <PageNav
            data={data}
            page={page}
            setPage={setPage}
            resultsPerPage={resultsPerPage}
          />

          <ul className='search-results-page'>
            {data.map((result: Result, i: number) => {
              const itemInRange =
                i <= offset + resultsPerPage - 1 && i >= offset;
              return (
                itemInRange && (
                  <SearchItem result={result} key={result.symbol} />
                )
              );
            })}
          </ul>

          <PageNav
            data={data}
            page={page}
            setPage={setPage}
            resultsPerPage={resultsPerPage}
          />
        </>
      ) : (
        <h2>No Results Found For '{query}'</h2>
      )}
      <BottomNews />
    </>
  );
};

export default SearchResults;