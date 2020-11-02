import React, { useEffect, useContext, useState } from 'react';
import Quote from './Quote';
import QuoteSummary from './QuoteSummary';
import QuoteNews from './news/QuoteNews';
import QuoteChart from './QuoteChart';
import QuoteFinancials from './financials/QuoteFinancials';
import QuoteProfile from './QuoteProfile';
import QuoteValuation from './QuoteValuation';
import QuoteNav from './QuoteNav';
import QuoteGeneralNews from './news/QuoteGeneralNews.js';
import '../../css/quote/quotePage.css';
import { QuoteContext } from '../../context/QuoteContext';
import { Route, Switch, Redirect } from 'react-router-dom';
import { RealDataContext } from '../../context/RealDataContext';

const QuotePage = ({ match }) => {
  const symbol = match.params.symbol;
  const page = match.params.page;
  const { quote, fetchQuote } = useContext(QuoteContext);
  const { realData } = useContext(RealDataContext);

  useEffect(() => {
    document.querySelector('html').scrollTop = 0;
  }, []);

  useEffect(() => {
    fetchQuote(symbol);
    //eslint-disable-next-line
  }, [realData]);

  useEffect(() => {
    console.log(quote.isStock);
  }, [quote]);

  return (
    <div className='quote-page'>
      <Quote symbol={symbol} />
      {quote.isStock && <QuoteNav page={page} />}
      <Switch>
        <Route exact path='/quote/:symbol/summary'>
          <h2 className='quote-sub-heading'>Summary</h2>
          <QuoteSummary symbol={symbol} />
          {!quote.isStock && (
            <>
              <h2 className='quote-sub-heading' style={{ marginTop: '1rem' }}>
                Chart
              </h2>
              <QuoteChart symbol={symbol} />
            </>
          )}
        </Route>

        {quote.isStock && (
          <>
            <Route exact path='/quote/:symbol/chart'>
              <h2 className='quote-sub-heading'>Chart</h2>
              <QuoteChart symbol={symbol} />
            </Route>

            <Route exact path='/quote/:symbol/financials'>
              <h2 className='quote-sub-heading'>Financials</h2>
              <QuoteFinancials symbol={symbol} />
            </Route>

            <Route exact path='/quote/:symbol/profile'>
              <h2 className='quote-sub-heading'>Profile</h2>
              <QuoteProfile symbol={symbol} />
            </Route>

            <Route exact path='/quote/:symbol/valuation'>
              <h2 className='quote-sub-heading'>Valuation</h2>
              <QuoteValuation symbol={symbol} />
            </Route>
          </>
        )}

        <Redirect to='/quote/:symbol/summary' />
      </Switch>

      <div className='quote-news-container'>
        <h2 className='quote-sub-heading'>Breaking News</h2>
        {quote.isStock ? <QuoteNews symbol={symbol} /> : <QuoteGeneralNews />}
      </div>
    </div>
  );
};

export default QuotePage;
