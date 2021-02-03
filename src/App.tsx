import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from 'react-router-dom';
import Header from './components/smart/Header';
import HomePage from './pages/HomePage';
import QuotePage from './pages/QuotePage';
import SearchResultsPage from './pages/SearchResultsPage';
import IndexPage from './pages/IndexPage';
import StockPage from './pages/StockPage';
import CryptoPage from './pages/CryptoPage';
import CommodityPage from './pages/CommodityPage';
import ForexPage from './pages/ForexPage';
import WatchlistPage from './pages/WatchlistPage';
import Footer from './components/smart/Footer';
import { QuoteProvider } from './context/QuoteContext';
import { HelmetProvider } from 'react-helmet-async';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <QuoteProvider>
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
              <Route exact path='/cryptocurrencies' component={CryptoPage} />
              <Route exact path='/forex' component={ForexPage} />
              <Route exact path='/commodities' component={CommodityPage} />
              <Route exact path='/watchlist' component={WatchlistPage} />
              <Redirect from='/quote/:symbol/**' to='/quote/:symbol' />
              <Redirect from='/:page/**' to='/:page' />
              <Redirect from='/**' to='/' />
            </Switch>
          </main>
          <Footer />
        </Router>
      </QuoteProvider>
    </HelmetProvider>
  );
};

export default App;
