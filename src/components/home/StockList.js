import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { APIKeyContext } from '../../context/APIKeyContext';
import '../../css/priceList.css';

const StockList = () => {
  const [stockData, setStockData] = useState([]);
  const { iexSandboxKey } = useContext(APIKeyContext);

  const fetchStockQuote = (symbol) => {
    return fetch(
      `https://sandbox.iexapis.com/v1/stock/${symbol}/quote?filter=symbol,latestPrice,change,changePercent&token=${iexSandboxKey}`
    ).then((res) => res.json());
  };

  const fetchStockQuotes = (symbols) => {
    symbols.forEach((symbol, i) => {
      setTimeout(async () => {
        let quote = await fetchStockQuote(symbol);
        setStockData((prevData) => [
          ...prevData,
          {
            symbol,
            price: quote.latestPrice,
            change: quote.change,
            percentChange: (quote.changePercent * 100).toFixed(2),
          },
        ]);
      }, i * 150); // delay to avoid too many simultaneous fetch calls (API LIMITATION)
    });
  };

  useEffect(() => {
    fetchStockQuotes(['DIA', 'SPY', 'IWM', 'AMZN']);
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Price</th>
          <th>Change</th>
          <th>Percent Change</th>
        </tr>
      </thead>

      <tbody>
        {stockData.map(({ symbol, price, change, percentChange }) => (
          <tr key={symbol}>
            <td>
              <Link className='symbol-link' to={`/stocks/${symbol}`}>
                {symbol}
              </Link>
            </td>
            <td>${price}</td>
            <td style={change < 0 ? { color: 'red' } : { color: 'green' }}>
              {change}
            </td>
            <td
              style={percentChange < 0 ? { color: 'red' } : { color: 'green' }}
            >
              {percentChange}%
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StockList;
