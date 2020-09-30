import React, { useState, useEffect, useContext } from 'react';
import { APIKeyContext } from '../../context/APIKeyContext';
import PriceListItem from './PriceListItem';
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
        let stock = await fetchStockQuote(symbol);
        setStockData((prevData) => [
          ...prevData,
          {
            symbol,
            price: stock.latestPrice,
            change: stock.change,
            percentChange: (stock.changePercent * 100).toFixed(2),
            color: stock.change > 0 ? 'green' : 'red',
            isPositive: stock.change > 0,
            category: 'stocks',
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
        {stockData.map((stock) => (
          <PriceListItem key={stock.symbol} data={stock} />
        ))}
      </tbody>
    </table>
  );
};

export default StockList;
