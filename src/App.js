import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import StockPage from './components/StockPage';
import SearchResults from './components/SearchResults';
import Footer from './components/Footer';
import { HeaderProvider } from './context/HeaderContext';
import { APIKeyProvider } from './context/APIKeyContext';

const App = () => {
  return (
    <HeaderProvider>
      <APIKeyProvider>
        <Router>
          <Header />
          <main>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/search/:query' component={SearchResults} />
              <Route exact path='/quote/stocks/:ticker' component={StockPage} />
            </Switch>
          </main>
          <Footer />
        </Router>
      </APIKeyProvider>
    </HeaderProvider>
  );
};

export default App;
