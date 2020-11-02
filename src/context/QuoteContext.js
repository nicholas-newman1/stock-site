import React, { createContext, useState, useContext } from 'react';
import { dummyQuoteData } from '../components/dummyData';
import { shortenNumber } from '../components/helpers';
import { RealDataContext } from './RealDataContext';
import { Helmet } from 'react-helmet-async';

export const QuoteContext = createContext();

export const QuoteProvider = (props) => {
  const { realData } = useContext(RealDataContext);
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
    let data;
    if (realData) {
      const res = await fetch(
        `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${process.env.REACT_APP_FMP_KEY}`
      );
      data = await res.json();
      data = data[0];
    } else {
      data = { ...dummyQuoteData[0] };
    }

    // Alter the returned data to make it prettier for rendering

    const { price, change, changesPercentage, exchange } = data;
    let decimals = 2;
    while (
      change !== 0 &&
      change.toLocaleString(undefined, {
        maximumFractionDigits: decimals,
      }) === '0'
    ) {
      decimals++;
    }

    data = {
      ...data,

      // round to 2 or 4 decimals depending on magnitude of the price
      price: price.toLocaleString(undefined, {
        maximumFractionDigits: decimals,
        minimumFractionDigits: decimals,
      }),

      // round to 2 or 4 decimals depending on magnitude of the change
      change: change.toLocaleString(undefined, {
        maximumFractionDigits: decimals,
        minimumFractionDigits: decimals,
      }),

      percentChange: Number(changesPercentage).toLocaleString(),

      // added properties to make rendering easier
      color: change > 0 ? 'green' : 'red',
      isPositive: change > 0,
      isStock:
        [
          'INDEX',
          'ETF',
          'MUTUAL_FUND',
          'FOREX',
          'CRYPTO',
          '- - - - - - -',
        ].findIndex((item) => item === exchange) === -1,
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
        [key]: shortenNumber(data[key], decimals),
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
      <Helmet>
        <title>{`${quote.symbol} | ${quote.name} | Free Quote | Finance App`}</title>
      </Helmet>
      {props.children}
    </QuoteContext.Provider>
  );
};
