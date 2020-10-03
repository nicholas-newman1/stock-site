import React, { useState, useEffect } from 'react';
import PriceListItem from './PriceListItem';
import LoadingPriceList from './LoadingPriceList';

const StockList = () => {
  const [stockData, setStockData] = useState([]);
  const [loading, setLoading] = useState(false);

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
            price: stock.latestPrice.toFixed(2),
            change: stock.change.toFixed(2),
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

  useEffect(() => {
    stockData.length < 4 ? setLoading(true) : setLoading(false);
  }, [stockData.length]);

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
        {loading ? (
          <LoadingPriceList />
        ) : (
          stockData.map((stock) => (
            <PriceListItem key={stock.symbol} data={stock} />
          ))
        )}
      </tbody>
    </table>
  );
};

export default StockList;
