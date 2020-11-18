import React, { useEffect } from 'react';
import BottomNews from '../../global/bottomNews/BottomNews';
import PriceOverview from './priceOverview/PriceOverview';
import MainNewsItem from './MainNewsItem';
import { Helmet } from 'react-helmet-async';
import './home.css';

const Home = () => {
  useEffect(() => {
    document.querySelector('html').scrollTop = 0;
  }, []);

  return (
    <div className='home-container'>
      <Helmet>
        <title>
          Free Stock Quotes | Stock News | Forex Rates | Cryptocurrencies
        </title>
      </Helmet>
      <div className='home-section-one'>
        <MainNewsItem />
        <BottomNews shift={true} />
      </div>
      <div className='home-section-two'>
        <PriceOverview />
      </div>
    </div>
  );
};

export default Home;
