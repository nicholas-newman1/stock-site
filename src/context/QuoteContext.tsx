import React, { createContext, useState, useContext } from 'react';
import { dummyQuoteData } from '../dummyData';
import { formatQuoteData } from '../helpers';
import { RealDataContext } from './RealDataContext';

interface Quote {
  symbol: string;
  name: string;
  price: number;
  changesPercentage: number;
  change: number;
  dayLow: number;
  dayHigh: number;
  yearHigh: number;
  yearLow: number;
  marketCap: number;
  priceAvg50: number;
  priceAvg200: number;
  volume: number;
  avgVolume: number;
  exchange: string;
  open: number;
  previousClose: number;
  eps: number;
  pe: number;
  earningsAnnouncement: string;
  sharesOutstanding: number;
  timestamp: number;
}

interface Error {
  'Error Message': string;
}

interface QuoteContextInterface {
  quote: Quote | {};
  fetchQuote: (symbol: string) => void;
  isStock: boolean;
  setIsStock: React.Dispatch<React.SetStateAction<boolean>>;
  isQuoteFetched: boolean;
  setIsQuoteFetched: React.Dispatch<React.SetStateAction<boolean>>;
}
export const QuoteContext = createContext<QuoteContextInterface>(
  {} as QuoteContextInterface
);

export const QuoteProvider: React.FC = (props) => {
  const { realData, setRealData, setError } = useContext(RealDataContext);
  const [isStock, setIsStock] = useState(false);
  const [isQuoteFetched, setIsQuoteFetched] = useState(false);
  const [quote, setQuote] = useState<Quote | {}>({});

  const fetchQuote = async (symbol: string) => {
    let data: Quote[] | Error;
    let quote: Quote;
    if (realData) {
      try {
        const res = await fetch(
          `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${process.env.REACT_APP_FMP_KEY}`
        );
        data = await res.json();
        if ('Error Message' in data) throw new Error(data['Error Message']);
        quote = data[0];
      } catch (error) {
        console.log(new Error(error));
        setError(error);
        quote = { ...dummyQuoteData[0] };
        setRealData(false);
      }
    } else {
      quote = { ...dummyQuoteData[0] };
    }

    /* Non-stock quotes do not have a QuoteNav on QuotePage and they display both QuoteSummary
    and QuoteChart. Stock quotes only show QuoteSummary but have a nav to view 
    QuoteChart, QuoteFinancials, QuoteProfile, etc */
    setIsStock(
      ['INDEX', 'ETF', 'MUTUAL_FUND', 'FOREX', 'CRYPTO', 'COMMODITY'].findIndex(
        (item) => item === quote.exchange
      ) === -1
    );

    // Format data to be more readable
    quote = formatQuoteData(quote);

    setQuote(quote);
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
