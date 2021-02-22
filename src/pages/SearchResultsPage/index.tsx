import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../reducers/rootReducer';
import { Helmet } from 'react-helmet-async';
import { dummySearchResults } from '../../app/dummyData';
import Spinner from '../../common/components/Spinner';
import SearchFilter from '../../features/SearchResults/ExchangeFilter';
import PageNav from '../../common/components/PageNav';
import Heading from '../../common/components/Heading';
import useFetch from '../../common/hooks/useFetch';
import useScrollTop from '../../common/hooks/useScrollTop';
import './searchResultsPage.css';
import HorizontalRule from '../../common/components/HorizontalRule';
import {
  addToWatchlist,
  removeFromWatchlist,
} from '../../actions/watchlistActions';
import SearchResults from '../../features/SearchResults/SearchResults';
import { SearchResult } from '../../types/APITypes';
import GeneralBottomNewsContainer from '../../common/containers/GeneralBottomNewsContainer';

interface SearchResultsFetch {
  data: SearchResult[];
  loading: boolean;
}

interface MatchParams {
  query: string;
}

interface Props extends RouteComponentProps<MatchParams> {}

const SearchResultsPage: React.FC<Props> = ({ match }) => {
  useScrollTop(); // scrolls to top of page on component mount

  const [displayFilter, setDisplayFilter] = useState(false);
  const [exchange, setExchange] = useState<Exchange>('');
  const [page, setPage] = useState(0);
  const [resultsPerPage] = useState(10);
  const offset = page * resultsPerPage;
  const query = match.params.query;
  const exchanges: Exchange[] = [
    'INDEX',
    'MUTUAL_FUND',
    'NASDAQ',
    'ETF',
    'COMMODITY',
    'CRYPTO',
    'FOREX',
    'TSX',
    'AMEX',
    'NYSE',
    'EURONEXT',
  ];

  const { data, loading }: SearchResultsFetch = useFetch(
    [], // initial value
    'search', // endpoint
    dummySearchResults, // dummy data
    `query=${query}${exchange && '&exchange=' + exchange}`, // parameters
    [query, exchange] // dependencies
  );

  const dispatch = useDispatch();

  const watchlist = useSelector((state: AppState) => state.watchlist);

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

      <button
        className='search-results-page__filter-btn btn btn-grey btn-small'
        onClick={() => setDisplayFilter((prev) => !prev)}
      >
        {displayFilter ? 'Hide Filter' : 'Show Filter'}
      </button>

      {displayFilter && (
        <SearchFilter
          filters={exchanges}
          setFilter={(exchange) => {
            setExchange(exchange);
            setDisplayFilter(false);
          }}
        />
      )}
      <HorizontalRule />

      {loading ? (
        <Spinner />
      ) : data.length > 0 ? (
        <>
          <SearchResults
            searchResults={data.filter((result, i) => {
              const itemInRange =
                i <= offset + resultsPerPage - 1 && i >= offset;
              return itemInRange;
            })}
            watchlist={watchlist}
            addToWatchlist={(symbol) => dispatch(addToWatchlist(symbol))}
            removeFromWatchlist={(symbol) =>
              dispatch(removeFromWatchlist(symbol))
            }
          />

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
      <GeneralBottomNewsContainer />
    </>
  );
};

export default SearchResultsPage;
