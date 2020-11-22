import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from 'react-router-dom';
import Header from './components/header/Header';
import HomePage from './components/pages/home/HomePage';
import QuotePage from './components/pages/quote/QuotePage';
import SearchResultsPage from './components/pages/search/SearchResultsPage';
import IndexPage from './components/pages/IndexPage';
import StockPage from './components/pages/stockPage/StockPage';
import CryptoPage from './components/pages/CryptoPage';
import CommodityPage from './components/pages/CommodityPage';
import ForexPage from './components/pages/ForexPage';
import NotFoundPage from './components/pages/NotFoundPage';
import Footer from './components/footer/Footer';
import { QuoteProvider } from './context/QuoteContext';
import { RealDataProvider } from './context/RealDataContext';
import { DisplayNavProvider } from './context/DisplayNavContext';
import { HelmetProvider } from 'react-helmet-async';

const App = () => {
  return (
    <HelmetProvider>
      <RealDataProvider>
        <QuoteProvider>
          <DisplayNavProvider>
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
                  <Route exact path='/indexes' component={IndexPage} />
                  <Route exact path='/stocks' component={StockPage} />
                  <Route
                    exact
                    path='/cryptocurrencies'
                    component={CryptoPage}
                  />
                  <Route exact path='/forex' component={ForexPage} />
                  <Route exact path='/commodities' component={CommodityPage} />
                  <Redirect from='/quote/:symbol/**' to='/quote/:symbol' />
                  <Redirect from='/:page/**' to='/:page' />
                  <Route component={NotFoundPage} />
                </Switch>
              </main>
              <Footer />
            </Router>
          </DisplayNavProvider>
        </QuoteProvider>
      </RealDataProvider>
    </HelmetProvider>
  );
};

export default App;
