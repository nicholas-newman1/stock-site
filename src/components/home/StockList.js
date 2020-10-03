import React, { useState, useEffect } from 'react';
import PriceListItem from './PriceListItem';
import '../../css/home/priceList.css';

const StockList = () => {
  const [stockData, setStockData] = useState([]);

  const fetchStockQuote = (symbol) => {
    return fetch(
      `https://sandbox.iexapis.com/v1/stock/${symbol}/quote?filter=symbol,latestPrice,change,changePercent&token=${process.env.REACT_APP_IEX_SANDBOX_KEY}`
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
      }, i * 200); // delay to avoid too many simultaneous fetch calls (API LIMITATION)
    });
  };

  useEffect(() => {
    fetchStockQuotes(['DIA', 'SPY', 'IWM', 'AMZN']);
    // eslint-disable-next-line
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
