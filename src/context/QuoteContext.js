import React, { createContext, useState } from 'react';
import { dummyQuoteData } from '../components/dummyData';
import { shortenNumber } from '../components/helpers';

export const QuoteContext = createContext();

export const QuoteProvider = (props) => {
  const [quote, setQuote] = useState({
    // set default values to be displayed until data is returned from fetch request
    price: '----',
    change: '----',
    percentChange: '----',
    symbol: '----',
    name: '--------------',
    exchange: '- - - - - - -',
    previousClose: '- -',
    open: '- -',
    dayHigh: '- -',
    dayLow: '- -',
    yearHigh: '- -',
    yearLow: '- -',
    marketCap: '- -',
    pe: '- -',
    eps: '- -',
    sharesOutstanding: '- -',
    volume: '- -',
    avgVolume: '- -',
  });

  const fetchQuote = async (symbol) => {
    // const res = await fetch(
    //   `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${process.env.REACT_APP_FMP_KEY}`
    // );
    // let data = await res.json();
    // data = data[0];

    let data = dummyQuoteData[0];

    // The following code alters the returned data to make it prettier for rendering

    const { price, change, changesPercentage } = data;

    data = {
      ...data,

      // round to 2 or 4 decimals depending on magnitude of the price
      price: Number(
        -1 < price && price < 1 ? price.toFixed(4) : price.toFixed(2)
      ).toLocaleString(),

      // round to 2 or 4 decimals depending on magnitude of the change
      change: Number(
        -1 < change && change < 1 ? change.toFixed(4) : change.toFixed(2)
      ).toLocaleString(),

      percentChange: Number(changesPercentage).toLocaleString(),

      // added properties to make rendering easier
      color: change > 0 ? 'green' : 'red',
      isPositive: change > 0,
    };

    for (let key in data) {
      // replace null values with 'N/A'
      data = {
        ...data,
        [key]: data[key] === null ? 'N/A' : data[key],
      };

      // replace long numbers with a shortned version
      data = {
        ...data,
        [key]: shortenNumber(data[key]),
      };
    }

    setQuote(data);
  };

  return (
    <QuoteContext.Provider
      value={{
        quote,
        fetchQuote,
      }}
    >
      {props.children}
    </QuoteContext.Provider>
  );
};
