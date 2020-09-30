import React from 'react';
import { Link } from 'react-router-dom';

const CryptoItem = ({ data: { symbol, price, percentChange } }) => {
  const getChange = (price, percentChange) => {
    if (percentChange < 0) {
      return (price * ((percentChange - 100) / 100) + price).toFixed(2);
    } else if (percentChange > 0) {
      return (price * ((percentChange + 100) / 100) - price).toFixed(2);
    } else {
      return 0;
    }
  };

  return (
    <tr>
      <td>
        <Link className="symbol-link" to={`/cryptocurrencies/${symbol}`}>
          {symbol}
        </Link>
      </td>
      <td>${price.toFixed(2)}</td>
      <td style={percentChange < 0 ? { color: 'red' } : { color: 'green' }}>
        {percentChange > 0 && '+'}
        {getChange(price, percentChange)}
      </td>
      <td style={percentChange < 0 ? { color: 'red' } : { color: 'green' }}>
        {percentChange > 0 && '+'}
        {percentChange.toFixed(2)}%
      </td>
    </tr>
  );
};

export default CryptoItem;
