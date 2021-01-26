import React, { useEffect, useState } from 'react';
import BottomNews from '../../components/bottomNews/BottomNews';
import PriceList from '../../components/priceList/PriceList';
import MainNewsItem from '../../components/mainNewsItem/MainNewsItem';
import { Helmet } from 'react-helmet-async';
import useScrollTop from '../../hooks/useScrollTop';
import './home.css';
import useFetch from '../../hooks/useFetch2';

const Home: React.FC = () => {
  useScrollTop(); // scrolls to top of page on component mount

  const [mainNewsItem, setMainNewsItem] = useState<NewsItem>({} as NewsItem);
  const [bottomNewsData, setBottomNewsData] = useState<NewsItem[]>([]);

  const { data: newsData, loading: loadingNews } = useFetch(
    [], // initial value
    'stock_news', // endpoint
    'limit=11' // params
  );

  useEffect(() => {
    setMainNewsItem(newsData.shift());
    setBottomNewsData(newsData);
  }, [newsData]);

  return (
    <div className='home'>
      <Helmet>
        <title>
          Free Stock Quotes | Stock News | Forex Rates | Cryptocurrencies
        </title>
      </Helmet>
      <div className='home__section-one'>
        <MainNewsItem data={mainNewsItem} loading={loadingNews} />
        <BottomNews newsData={bottomNewsData} loading={loadingNews} />
      </div>
      <div className='home__section-two'>
        <PriceList />
      </div>
    </div>
  );
};

export default Home;
