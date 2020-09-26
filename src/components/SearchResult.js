import React from 'react';
import { Link } from 'react-router-dom';

const SearchResult = ({ result: { symbol, securityName, exchange } }) => {
  return (
    <li>
      <h2>
        <Link to={`/stocks/${symbol}`}>
          {symbol} ({exchange})
        </Link>
      </h2>
      <h3>{securityName}</h3>
    </li>
  );
};

export default SearchResult;
