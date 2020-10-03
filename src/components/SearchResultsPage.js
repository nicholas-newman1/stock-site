import React, { useEffect, useState, useContext } from 'react';
import { APIKeyContext } from '../context/APIKeyContext';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';
import '../css/searchResults.css';

const SearchResults = ({ match }) => {
  const { iexSandboxKey } = useContext(APIKeyContext);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchSearchResults = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://sandbox.iexapis.com/v1/search/${match.params.query}?token=${iexSandboxKey}`
      );
      const data = await res.json();
      setSearchResults(data);
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchSearchResults();
    // eslint-disable-next-line
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <ul className='results'>
      {searchResults.map(({ symbol, securityName, exchange }) => (
        <li className='result' key={symbol}>
          <div className='result-content'>
            <h2 className='result-heading'>
              <Link className='result-link' to={`/quote/stocks/${symbol}`}>
                {symbol} ({exchange})
              </Link>
            </h2>
            <p className='result-desc'>{securityName}</p>
          </div>
          <div>
            <button className='view-quote-btn'>View Quote</button>
            <button className='save-result-btn'>Add to Watchlist</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;