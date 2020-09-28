import React, { useState, useEffect, useContext } from 'react';
import { APIKeyContext } from '../../context/APIKeyContext';
import { wait } from '../helpers';
import StockList from './StockList';
import ForexList from './ForexList';
import CryptosList from './CryptosList';

const PriceList = () => {
  const [stockData, setStockData] = useState([]);
  const [forexData, setForexData] = useState([]);
  const [cryptosData, setCryptosData] = useState([]);
  const { iexSandboxKey, iexCloudKey } = useContext(APIKeyContext);

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
            close: quote.latestPrice,
            change: quote.change,
            percentChange: (quote.changePercent * 100).toFixed(2),
          },
        ]);
      }, i * 100); // delay to avoid too many simultaneous fetch calls (API LIMITATION)
    });
  };

  const fetchForexRates = async (pairs) => {
    //const res = await fetch();
  };

  const fetchFunctions = [
    { setState: setStockData, symbols: ['DIA', 'SPY', 'IWM'] },
    //{ setState: setForexData, symbols: ['AAPL', 'AMZN', 'DOW', 'RBC'] },
    //{ setState: setCryptosData, symbols: ['AMZN', 'DOW', 'AAPL', 'RBC'] },
  ];

  useEffect(() => {
    (async () => {
      fetchStockQuotes(['DIA', 'SPY', 'IWM']);
      await wait(100); // don't have to do this if using different API's
      // may also be able to put these functions inside their respective components.
      fetchForexRates(['CADUSA', 'CADEUR', 'CADGBP', 'CADCNY']);
    })();
    // fetchFunctions.forEach(({ setState, symbols }, i) => {
    //   setTimeout(() => {
    //     fetchStockQuotes(setState, symbols);
    //   }, i * 400); // delay to avoid too many simultaneous fetch calls (API LIMITATION)
    // });
  }, []);

  return (
    <ul>
      <li>
        <h2>Stocks</h2>
        <StockList stockData={stockData} />
      </li>
      <li>
        <h2>Forex</h2>
        <ForexList forexData={forexData} />
      </li>
      <li>
        <h2>Cryptocurrencies</h2>
        <CryptosList cryptosData={cryptosData} />
      </li>
    </ul>
  );
};

export default PriceList;
