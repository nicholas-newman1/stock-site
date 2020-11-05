import React, { useContext, useEffect } from 'react';
import NewsList from './news/NewsList';
import PriceOverview from './priceOverview/PriceOverview';
import MainNewsItem from './news/MainNewsItem';
import LoadingMainNewsItem from './news/LoadingMainNewsItem';
import LoadingNewsList from './news/LoadingNewsList';
import { NewsContext } from '../../context/NewsContext';
import { RealDataContext } from '../../context/RealDataContext';
import { Helmet } from 'react-helmet-async';
import '../../css/home/home.css';

const Home = () => {
  const { fetchNewsArticles, loading } = useContext(NewsContext);
  const { realData } = useContext(RealDataContext);

  useEffect(() => {
    fetchNewsArticles();
    // eslint-disable-next-line
  }, [realData]);

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
        {loading ? <LoadingMainNewsItem /> : <MainNewsItem />}
        {loading ? <LoadingNewsList /> : <NewsList />}
      </div>
      <div className='home-section-two'>
        <PriceOverview />
      </div>
    </div>
  );
};

export default Home;
