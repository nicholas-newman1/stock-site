import React, { useEffect, useContext, useState } from 'react';
import Quote from './Quote';
import QuoteSummary from './QuoteSummary';
import QuoteNews from './news/QuoteNews';
import QuoteChart from './QuoteChart';
import QuoteProfile from './QuoteProfile';
import QuoteValuation from './QuoteValuation';
import QuoteNav from './QuoteNav';
import '../../css/quote/quotePage.css';
import { QuoteContext } from '../../context/QuoteContext';
import { RealDataContext } from '../../context/RealDataContext';
import QuoteFinancials from './financials/QuoteFinancials';

const QuotePage = ({ match }) => {
  const symbol = match.params.symbol;
  const [tab, setTab] = useState('Summary');
  const { fetchQuote, isStock, quoteFetched, setQuoteFetched } = useContext(
    QuoteContext
  );
  const { realData } = useContext(RealDataContext);

  useEffect(() => {
    document.querySelector('html').scrollTop = 0;
    return () => {
      setQuoteFetched(false);
    };
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    fetchQuote(symbol);
    //eslint-disable-next-line
  }, [realData]);

  return (
    <div className='quote-page'>
      <Quote symbol={symbol} />
      {isStock && <QuoteNav tab={tab} setTab={setTab} />}
      {tab === 'Summary' && <QuoteSummary symbol={symbol} />}
      {tab === 'Chart' && <QuoteChart symbol={symbol} />}
      {tab === 'Financials' && <QuoteFinancials symbol={symbol} />}
      {tab === 'Profile' && <QuoteProfile symbol={symbol} />}
      {tab === 'Valuation' && <QuoteValuation symbol={symbol} />}
      {quoteFetched && !isStock && (
        <>
          <br />
          <QuoteChart symbol={symbol} />
        </>
      )}

      <div className='quote-news-container'>
        {quoteFetched && <QuoteNews symbol={isStock ? symbol : ''} />}
      </div>
    </div>
  );
};

export default QuotePage;
