import React from 'react';
import BottomNews from '../../components/bottomNews/BottomNews';
import PriceList from '../../components/priceList/PriceList';
import MainNewsItem from '../../components/mainNewsItem/MainNewsItem';
import { Helmet } from 'react-helmet-async';
import useScrollTop from '../../hooks/useScrollTop';
import './home.css';

const Home = () => {
  useScrollTop(); // scrolls to top of page on component mount

  return (
    <div className='home'>
      <Helmet>
        <title>
          Free Stock Quotes | Stock News | Forex Rates | Cryptocurrencies
        </title>
      </Helmet>
      <div className='home__section-one'>
        <MainNewsItem />
        <BottomNews shift={true} />
      </div>
      <div className='home__section-two'>
        <PriceList />
      </div>
    </div>
  );
};

export default Home;
