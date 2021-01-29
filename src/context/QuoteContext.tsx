import React, { createContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { disableRealData } from '../actions/realDataActions';
import { dummyQuoteData } from '../dummyData';
import { formatQuoteData } from '../helpers';
import { AppState } from '../reducers/rootReducer';

interface QuoteContextInterface {
  quote: KeyValueObject;
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
  const [isStock, setIsStock] = useState(false);
  const [isQuoteFetched, setIsQuoteFetched] = useState(false);
  const [quote, setQuote] = useState({});
  const dispatch = useDispatch();
  const realData = useSelector((state: AppState) => state.realData);

  const fetchQuote = async (symbol: string) => {
    let quote: KeyValueObject;
    if (realData.status) {
      try {
        const res = await fetch(
          `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${process.env.REACT_APP_FMP_KEY}`
        );
        const data = await res.json();
        if ('Error Message' in data) throw new Error(data['Error Message']);
        quote = data[0];
      } catch (error) {
        quote = { ...dummyQuoteData[0] };
        dispatch(disableRealData(error));
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
    let formattedQuote = formatQuoteData(quote);

    setQuote(formattedQuote);
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
