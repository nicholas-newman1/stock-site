import React from 'react';
import MainNewsItemContainer from '../../features/MainNewsItem/container';
import { Helmet } from 'react-helmet-async';
import useScrollTop from '../../common/hooks/useScrollTop';
import PriceListOverviewContainer from '../../features/PriceOverview/PriceOverviewContainer';
import GeneralBottomNewsContainer from '../../common/containers/GeneralBottomNewsContainer';
import './home.css';

const Home: React.FC = () => {
  useScrollTop(); // scrolls to top of page on component mount

  return (
    <div className='home'>
      <Helmet>
        <title>
          Free Stock Quotes | Stock News | Forex Rates | Cryptocurrencies
        </title>
      </Helmet>
      <div className='home__section-one'>
        <MainNewsItemContainer />
        <GeneralBottomNewsContainer />
      </div>
      <div className='home__section-two'>
        <PriceListOverviewContainer />
      </div>
    </div>
  );
};

export default Home;
