import React, { useEffect, useContext } from 'react';
import Quote from './Quote';
import QuoteDetails from './QuoteDetails';
import QuoteNews from './QuoteNews';
import QuoteChart from './QuoteChart';
import QuoteFinancials from './financials/QuoteFinancials';
import QuoteNav from './QuoteNav';
import '../../css/quote/quotePage.css';
import { QuoteContext } from '../../context/QuoteContext';
import { Route, Switch } from 'react-router-dom';

const QuotePage = ({ match }) => {
  const symbol = match.params.symbol;
  const page = match.params.page;
  const { fetchQuote } = useContext(QuoteContext);

  useEffect(() => {
    fetchQuote(symbol);
    //eslint-disable-next-line
  }, []);

  return (
    <div className='quote-page'>
      <Quote symbol={symbol} />
      <QuoteNav page={page} />
      <Switch>
        <Route exat path='/quote/:symbol/summary'>
          <h2 className='quote-sub-heading'>Summary</h2>
          <QuoteDetails symbol={symbol} />
        </Route>

        <Route exat path='/quote/:symbol/chart'>
          <h2 className='quote-sub-heading'>Chart</h2>
          <QuoteChart symbol={symbol} />
        </Route>

        <Route exat path='/quote/:symbol/financials'>
          <h2 className='quote-sub-heading'>Financials</h2>
          <QuoteFinancials symbol={symbol} />
        </Route>
      </Switch>

      <div className='quote-news-container'>
        <h2 className='quote-sub-heading'>Breaking News</h2>
        <QuoteNews symbol={symbol} />
      </div>
    </div>
  );
};

export default QuotePage;
