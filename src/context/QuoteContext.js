import React, { createContext, useState, useContext } from 'react';
import { dummyQuoteData } from '../dummyData';
import { formatQuoteData } from '../helpers';
import { RealDataContext } from './RealDataContext';

export const QuoteContext = createContext();

export const QuoteProvider = (props) => {
  const { realData, setRealData, setError } = useContext(RealDataContext);
  const [isStock, setIsStock] = useState(false);
  const [quoteFetched, setQuoteFetched] = useState(false);
  const [quote, setQuote] = useState({
    // data displayed while loading
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
      try {
        const res = await fetch(
          `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${process.env.REACT_APP_FMP_KEY}`
        );
        data = await res.json();
        if (data['Error Message']) throw data['Error Message'];
        data = data[0];
      } catch (error) {
        console.log(new Error(error));
        setError(error);
        data = { ...dummyQuoteData[0] };
        setRealData(false);
      }
    } else {
      data = { ...dummyQuoteData[0] };
    }

    if (data === undefined) {
      setQuote(null);
      setQuoteFetched(true);
      return;
    }

    setIsStock(
      [
        'INDEX',
        'ETF',
        'MUTUAL_FUND',
        'FOREX',
        'CRYPTO',
        'COMMODITY',
        '- - - - - - -',
      ].findIndex((item) => item === data.exchange) === -1
    );

    // Format data to be more readable
    data = formatQuoteData(data);

    setQuote(data);
    setQuoteFetched(true);
  };

  return (
    <QuoteContext.Provider
      value={{
        quote,
        fetchQuote,
        isStock,
        setIsStock,
        quoteFetched,
        setQuoteFetched,
      }}
    >
      {props.children}
    </QuoteContext.Provider>
  );
};
