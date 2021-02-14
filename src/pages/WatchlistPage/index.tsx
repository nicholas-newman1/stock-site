import React from 'react';
import { Helmet } from 'react-helmet-async';
import Heading from '../../components/Heading';
import useScrollTop from '../../hooks/useScrollTop';
import WatchlistTableContainer from '../../containers/WatchlistTableContainer';
import GeneralBottomNewsContainer from '../../containers/GeneralBottomNewsContainer';

const WatchlistPage: React.FC = () => {
  useScrollTop(); // scrolls to top of page on component mount

  return (
    <div>
      <Helmet>
        <title>Watchlist | Finance App</title>
        <meta
          name='description'
          content='Find free stock quotes, forex rates, cryptocurrency prices, and more.'
        />
      </Helmet>

      <Heading text='Watchlist' />
      <WatchlistTableContainer />
      <GeneralBottomNewsContainer />
    </div>
  );
};

export default WatchlistPage;
