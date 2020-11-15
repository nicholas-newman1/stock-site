import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from 'react-router-dom';
import Header from './components/header/Header';
import HomePage from './components/home/HomePage';
import QuotePage from './components/quote/QuotePage';
import SearchResultsPage from './components/search/SearchResultsPage';
import TablePage from './components/global/tablePage/TablePage';
import ForexPage from './components/ForexPage';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import { QuoteProvider } from './context/QuoteContext';
import { RealDataProvider } from './context/RealDataContext';
import { TableProvider } from './context/TableContext';
import { HelmetProvider } from 'react-helmet-async';

const App = () => {
  return (
    <HelmetProvider>
      <RealDataProvider>
        <QuoteProvider>
          <TableProvider>
            <Router>
              <Header />
              <main>
                <Switch>
                  <Route exact path='/' component={HomePage} />
                  <Route
                    exact
                    path='/search/:query'
                    component={SearchResultsPage}
                  />
                  <Route exact path='/quote/:symbol' component={QuotePage} />
                  <Route exact path='/cryptocurrencies' component={TablePage} />
                  <Route exact path='/forex' component={ForexPage} />
                  <Route exact path='/commodities' component={TablePage} />
                  <Redirect from='/quote/:symbol/**' to='/quote/:symbol' />
                  <Redirect from='/:page/**' to='/:page' />
                  <Route component={NotFound} />
                </Switch>
              </main>
              <Footer />
            </Router>
          </TableProvider>
        </QuoteProvider>
      </RealDataProvider>
    </HelmetProvider>
  );
};

export default App;
