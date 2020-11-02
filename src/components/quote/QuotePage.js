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
import { Route, Switch } from 'react-router-dom';
import { RealDataContext } from '../../context/RealDataContext';

const QuotePage = ({ match }) => {
  const symbol = match.params.symbol;
  const page = match.params.page;
  const { quote, fetchQuote } = useContext(QuoteContext);
  const { realData } = useContext(RealDataContext);
  const [isStock, setIsStock] = useState(false);

  useEffect(() => {
    document.querySelector('html').scrollTop = 0;
  }, []);

  useEffect(() => {
    fetchQuote(symbol);
    //eslint-disable-next-line
  }, [realData]);

  useEffect(() => {
    console.log('run');
    console.log(quote.exchange);
    setIsStock(
      [
        'INDEX',
        'ETF',
        'MUTUAL_FUND',
        'FOREX',
        'CRYPTO',
        '- - - - - - -',
      ].findIndex((item) => item === quote.exchange) === -1
    );
  }, [quote]);

  return (
    <div className='quote-page'>
      {console.log(isStock)}
      <Quote symbol={symbol} />
      {isStock && <QuoteNav page={page} />}
      <Switch>
        <Route exat path='/quote/:symbol/summary'>
          <h2 className='quote-sub-heading'>Summary</h2>
          <QuoteSummary symbol={symbol} />
          {!isStock && (
            <>
              <h2 className='quote-sub-heading' style={{ marginTop: '1rem' }}>
                Chart
              </h2>
              <QuoteChart symbol={symbol} />
            </>
          )}
        </Route>

        {isStock && (
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
      </Switch>

      <div className='quote-news-container'>
        <h2 className='quote-sub-heading'>Breaking News</h2>
        {['INDEX', 'ETF', 'MUTUAL_FUND', 'FOREX', 'CRYPTO'].findIndex(
          (item) => item === quote.exchange
        ) === -1 ? (
          <QuoteNews symbol={symbol} />
        ) : (
          <QuoteGeneralNews />
        )}
      </div>
    </div>
  );
};

export default QuotePage;
