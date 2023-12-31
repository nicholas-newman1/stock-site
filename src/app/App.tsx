import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import QuotePage from '../pages/QuotePage';
import SearchResultsPage from '../pages/SearchResultsPage';
import IndexPage from '../pages/IndexPage';
import StockPage from '../pages/StockPage';
import CryptoPage from '../pages/CryptoPage';
import CommodityPage from '../pages/CommodityPage';
import ForexPage from '../pages/ForexPage';
import WatchlistPage from '../pages/WatchlistPage';
import Footer from './Footer';
import { HelmetProvider } from 'react-helmet-async';
import HeaderContainer from './Header/HeaderContainer';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <HeaderContainer />
        <main>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/search/:query' component={SearchResultsPage} />
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
    </HelmetProvider>
  );
};

export default App;
