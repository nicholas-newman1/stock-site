import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import StockPage from './components/StockPage';
import SearchResults from './components/SearchResults';
import Footer from './components/Footer';
import { SearchProvider } from './context/SearchContext';

const App = () => {
  return (
    <SearchProvider>
      <Router>
        <Header />
        <main className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/search/:query" component={SearchResults} />
            <Route exact path="/stocks/:ticker" component={StockPage} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </SearchProvider>
  );
};

export default App;
