import React from 'react';
import { Route } from 'react-router-dom';
import QuoteFinancials from './financials/QuoteFinancials';
import QuoteProfile from './QuoteProfile';
import QuoteValuation from './QuoteValuation';
import QuoteChart from './QuoteChart';

const StockRoutes = ({ symbol }) => {
  return (
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
  );
};

export default StockRoutes;
