import React, { useContext, useEffect } from 'react';
import NewsList from './news/NewsList';
import PriceOverview from './priceOverview/PriceOverview';
import MainNewsItem from './news/MainNewsItem';
import LoadingMainNewsItem from './news/LoadingMainNewsItem';
import LoadingNewsList from './news/LoadingNewsList';
import { NewsContext } from '../../context/NewsContext';
import '../../css/home/home.css';

const Home = () => {
  const { fetchNewsArticles, loading } = useContext(NewsContext);

  useEffect(() => {
    fetchNewsArticles();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='home-container'>
      <div className='home-section-one'>
        {loading ? <LoadingMainNewsItem /> : <MainNewsItem />}
      </div>
      <div className='home-section-two'>
        <PriceOverview />
      </div>
      <div className='home-section-three'>
        {loading ? <LoadingNewsList /> : <NewsList />}
      </div>
    </div>
  );
};

export default Home;
