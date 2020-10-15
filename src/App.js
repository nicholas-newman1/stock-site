import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header/Header';
import HomePage from './components/home/HomePage';
import QuotePage from './components/quote/QuotePage';
import SearchResultsPage from './components/SearchResultsPage';
import Footer from './components/Footer';
import { HeaderProvider } from './context/HeaderContext';
import { NewsProvider } from './context/NewsContext';
import { QuoteProvider } from './context/QuoteContext';
import { ChartProvider } from './context/ChartContext';

const App = () => {
  return (
    <HeaderProvider>
      <NewsProvider>
        <QuoteProvider>
          <ChartProvider>
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
                  <Route
                    exact
                    path='/quote/:symbol/:page'
                    component={QuotePage}
                  />
                </Switch>
              </main>
              <Footer />
            </Router>
          </ChartProvider>
        </QuoteProvider>
      </NewsProvider>
    </HeaderProvider>
  );
};

export default App;
