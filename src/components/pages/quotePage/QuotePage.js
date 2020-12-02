import React, { useEffect, useContext, useState } from 'react';
import Quote from './quote/Quote';
import QuoteSummary from './quoteSummary/QuoteSummary';
import BottomNews from '../../global/bottomNews/BottomNews';
import QuoteChart from './quoteChart/QuoteChart';
import QuoteProfile from './quoteProfile/QuoteProfile';
import QuoteValuation from './quoteValuation/QuoteValuation';
import QuoteNav from './quoteNav/QuoteNav';
import { QuoteContext } from '../../../context/QuoteContext';
import QuoteFinancials from './quoteFinancials/QuoteFinancials';
import { Helmet } from 'react-helmet-async';
import { Redirect } from 'react-router-dom';
import useScrollTop from '../../../hooks/useScrollTop';

const QuotePage = ({ match }) => {
  const symbol = match.params.symbol;
  const [tab, setTab] = useState('Summary');
  const {
    fetchQuote,
    isStock,
    isQuoteFetched,
    setIsQuoteFetched,
    quote,
  } = useContext(QuoteContext);

  useScrollTop(); // scrolls to top of page on component mount

  useEffect(() => {
    fetchQuote(symbol);

    return () => {
      setIsQuoteFetched(false);
    };
    //eslint-disable-next-line
  }, []);

  return quote !== null ? (
    <>
      <Helmet>
        <title>{`${quote.symbol} | ${quote.name} | Free Quote | Stock Site`}</title>
        <meta
          name='description'
          content={`${quote.symbol} free quote. ${quote.name} quote. Free stock quotes, forex exchange rates, cryptocurrency rates, and more.`}
        />
      </Helmet>
      <>
        <Quote symbol={symbol} />
        {isStock && <QuoteNav tab={tab} setTab={setTab} />}
        {tab === 'Summary' && <QuoteSummary symbol={symbol} />}
        {tab === 'Chart' && <QuoteChart symbol={symbol} />}
        {tab === 'Financials' && <QuoteFinancials symbol={symbol} />}
        {tab === 'Profile' && <QuoteProfile symbol={symbol} />}
        {tab === 'Valuation' && <QuoteValuation symbol={symbol} />}
        {isQuoteFetched && !isStock && (
          <>
            <br />
            <QuoteChart symbol={symbol} />
          </>
        )}

        {isQuoteFetched && <BottomNews symbol={isStock ? symbol : ''} />}
      </>
    </>
  ) : (
    <Redirect to='/' />
  );
};

export default QuotePage;
