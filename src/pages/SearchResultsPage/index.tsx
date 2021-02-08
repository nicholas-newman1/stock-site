import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../../actions/newsActions';
import { AppState } from '../../reducers/rootReducer';
import { Helmet } from 'react-helmet-async';
import { dummySearchResults } from '../../utils/dummyData';
import Spinner from '../../components/dumb/Spinner';
import SearchFilter from '../../components/SearchFilter';
import SearchItem from '../../components/SearchItem';
import PageNav from '../../components/dumb/PageNav';
import Heading from '../../components/dumb/Heading';
import BottomNews from '../../components/dumb/BottomNews';
import useFetch from '../../hooks/useFetch';
import useScrollTop from '../../hooks/useScrollTop';
import './searchResultsPage.css';

interface MatchParams {
  query: string;
}

interface Props extends RouteComponentProps<MatchParams> {}

const SearchResults: React.FC<Props> = ({ match }) => {
  useScrollTop(); // scrolls to top of page on component mount

  const [exchange, setExchange] = useState<Exchange>('');
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

  const dispatch = useDispatch();

  const { data: newsData, loading: loadingNews } = useSelector(
    (state: AppState) => state.news
  );

  useEffect(() => {
    dispatch(fetchNews('limit=10&tickers=AAPL,FB,AMZN,TSLA'));
    //eslint-disable-next-line
  }, []);

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
            length={data.length}
            page={page}
            setPage={setPage}
            resultsPerPage={resultsPerPage}
          />

          <ul className='search-results-page'>
            {data.map((result: SearchResult, i: number) => {
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
            length={data.length}
            page={page}
            setPage={setPage}
            resultsPerPage={resultsPerPage}
          />
        </>
      ) : (
        <h2>No Results Found For '{query}'</h2>
      )}
      <BottomNews newsData={newsData} loading={loadingNews} />
    </>
  );
};

export default SearchResults;