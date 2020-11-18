import React, { useEffect, useContext, useState } from 'react';
import Quote from './Quote';
import QuoteSummary from './QuoteSummary';
import BottomNews from '../../global/bottomNews/BottomNews';
import QuoteChart from './QuoteChart';
import QuoteProfile from './QuoteProfile';
import QuoteValuation from './QuoteValuation';
import QuoteNav from './QuoteNav';
import { QuoteContext } from '../../../context/QuoteContext';
import { RealDataContext } from '../../../context/RealDataContext';
import QuoteFinancials from './financials/QuoteFinancials';
import { Helmet } from 'react-helmet-async';
import { Redirect } from 'react-router-dom';

const QuotePage = ({ match }) => {
  const symbol = match.params.symbol;
  const [tab, setTab] = useState('Summary');
  const {
    fetchQuote,
    isStock,
    quoteFetched,
    setQuoteFetched,
    quote,
  } = useContext(QuoteContext);
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

  return quote !== null ? (
    <>
      <Helmet>
        <title>{`${quote.symbol} | ${quote.name} | Free Quote | Stock Site`}</title>
        <meta
          name='description'
          content={`${quote.symbol} free quote. ${quote.name} quote. Free stock quotes, forex exchange rates, cryptocurrency rates, and more.`}
        />
      </Helmet>
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

        {quoteFetched && <BottomNews symbol={isStock ? symbol : ''} />}
      </div>
    </>
  ) : (
    <Redirect to='/' />
  );
};

export default QuotePage;
