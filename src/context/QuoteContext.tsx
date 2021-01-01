import React, { createContext, useState, useContext } from 'react';
import { dummyQuoteData } from '../dummyData';
import { formatQuoteData } from '../helpers';
import { RealDataContext } from './RealDataContext';

export const QuoteContext = createContext(null);

export const QuoteProvider: React.FC = (props) => {
  const { realData, setRealData, setError } = useContext(RealDataContext);
  const [isStock, setIsStock] = useState(false);
  const [isQuoteFetched, setIsQuoteFetched] = useState(false);
  const [quote, setQuote] = useState({});

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

    /* Non-stock quotes do not have a QuoteNav on QuotePage and they display both QuoteSummary
    and QuoteChart. Stock quotes only show QuoteSummary but have a nav to view 
    QuoteChart, QuoteFinancials, QuoteProfile, etc */
    setIsStock(
      ['INDEX', 'ETF', 'MUTUAL_FUND', 'FOREX', 'CRYPTO', 'COMMODITY'].findIndex(
        (item) => item === data.exchange
      ) === -1
    );

    // Format data to be more readable
    data = formatQuoteData(data);

    setQuote(data);
    setIsQuoteFetched(true);
  };

  return (
    <QuoteContext.Provider
      value={{
        quote,
        fetchQuote,
        isStock,
        setIsStock,
        isQuoteFetched,
        setIsQuoteFetched,
      }}
    >
      {props.children}
    </QuoteContext.Provider>
  );
};
