import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header/Header';
import HomePage from './components/home/HomePage';
import QuotePage from './components/quote/QuotePage';
import SearchResultsPage from './components/SearchResultsPage';
import TablePage from './components/global/tablePage/TablePage';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import { NewsProvider } from './context/NewsContext';
import { QuoteProvider } from './context/QuoteContext';
import { RealDataProvider } from './context/RealDataContext';
import { TableProvider } from './context/TableContext';
import { HelmetProvider } from 'react-helmet-async';

const App = () => {
  return (
    <HelmetProvider>
      <RealDataProvider>
        <NewsProvider>
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
                    <Route
                      exact
                      path='/cryptocurrencies'
                      component={TablePage}
                    />
                    <Route exact path='/forex' component={TablePage} />
                    <Route exact path='/commodities' component={TablePage} />
                    <Route component={NotFound} />
                  </Switch>
                </main>
                <Footer />
              </Router>
            </TableProvider>
          </QuoteProvider>
        </NewsProvider>
      </RealDataProvider>
    </HelmetProvider>
  );
};

export default App;
