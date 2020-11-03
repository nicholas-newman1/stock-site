import React, { useEffect, useContext } from 'react';
import Quote from './Quote';
import QuoteSummary from './QuoteSummary';
import QuoteNews from './news/QuoteNews';
import QuoteChart from './QuoteChart';
import QuoteNav from './QuoteNav';
import QuoteGeneralNews from './news/QuoteGeneralNews.js';
import '../../css/quote/quotePage.css';
import { QuoteContext } from '../../context/QuoteContext';
import { Route, Switch, Redirect } from 'react-router-dom';
import { RealDataContext } from '../../context/RealDataContext';
import StockRoutes from './StockRoutes';

const QuotePage = ({ match }) => {
  const symbol = match.params.symbol;
  const page = match.params.page;
  const { fetchQuote, isStock, setIsStock } = useContext(QuoteContext);
  const { realData } = useContext(RealDataContext);

  useEffect(() => {
    document.querySelector('html').scrollTop = 0;
    return () => {
      setIsStock(false);
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
      {isStock && <QuoteNav page={page} />}
      <Switch>
        <Route exact path='/quote/:symbol/summary'>
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

        {isStock && <StockRoutes symbol={symbol} />}

        {!isStock && <Redirect to='/quote/:symbol/summary' />}
      </Switch>

      <div className='quote-news-container'>
        <h2 className='quote-sub-heading'>Breaking News</h2>
        {isStock ? <QuoteNews symbol={symbol} /> : <QuoteGeneralNews />}
      </div>
    </div>
  );
};

export default QuotePage;
