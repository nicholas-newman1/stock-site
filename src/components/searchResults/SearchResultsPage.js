import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Spinner from '../global/Spinner';
import SearchResultsFilter from './SearchResultsFilter';
import '../../css/searchResults/searchResults.css';

const SearchResults = ({ match }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [exchange, setExchange] = useState('');
  const query = match.params.query;

  const fetchSearchResults = async () => {
    setLoading(true);
    const res = await fetch(
      `https://financialmodelingprep.com/api/v3/search?query=${query}${
        exchange && '&exchange=' + exchange
      }&limit=10&apikey=${process.env.REACT_APP_FMP_KEY}`
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
            {searchResults.map(({ symbol, name, exchangeShortName }) => (
              <li className='result' key={symbol}>
                <div className='results-content'>
                  <h2 className='results-heading'>
                    <Link className='results-link' to={`/quote/${symbol}`}>
                      {symbol} ({exchangeShortName})
                    </Link>
                  </h2>
                  <p className='results-desc'>{name}</p>
                </div>
                <div className='results-btns-container'>
                  <button className='results-quote-btn'>
                    <Link
                      className='results-quote-link'
                      to={`/quote/${symbol}`}
                    >
                      View Quote
                    </Link>{' '}
                  </button>
                  <button className='results-watchlist-btn'>
                    Add to Watchlist
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <h2>No Data Available</h2>
      )}
    </>
  );
};

export default SearchResults;
