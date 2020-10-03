import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header/Header';
import HomePage from './components/home/HomePage';
import StockPage from './components/StockPage';
import SearchResultsPage from './components/SearchResultsPage';
import Footer from './components/Footer';
import { HeaderProvider } from './context/HeaderContext';
import { NewsProvider } from './context/NewsContext';

const App = () => {
  return (
    <HeaderProvider>
      <NewsProvider>
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
              <Route exact path='/quote/stocks/:ticker' component={StockPage} />
            </Switch>
          </main>
          <Footer />
        </Router>
      </NewsProvider>
    </HeaderProvider>
  );
};

export default App;
