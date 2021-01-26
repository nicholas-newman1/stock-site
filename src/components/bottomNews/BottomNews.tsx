import React, { useEffect, useState } from 'react';
import BottomNewsItem from '../bottomNewsItem/BottomNewsItem';
import BottomNewsLoading from '../bottomNewsLoading/BottomNewsLoading';
import { dummyStockNews } from '../../dummyData';
import './bottomNews.css';
import useFetch from '../../hooks/useFetch';

interface Props {
  symbol?: string;
}

const BottomNews: React.FC<Props> = ({ symbol = '' }) => {
  const [newsData, setNewsData] = useState<NewsItem[]>([]);

  const { data, loading } = useFetch(
    [], // initial value
    'stock_news', // endpoint
    dummyStockNews, // dummy data
    `limit=11${symbol ? `&tickers=${symbol}` : ''}` // params
  );

  useEffect(() => {
    if (data.length > 0) {
      /* The HomePage displays the first article in MainNewsItem. To avoid
      repitition of news articles, the first article is removed from BottomNews
      if the current page is the homepage. Otherwise, the last news item is
      removed to keep the array at an even length of 10.*/
      window.location.pathname === '/' ? data.shift() : data.pop();
      setNewsData(data);
    }
    //eslint-disable-next-line
  }, [data]);

  return (
    <div className='bottom-news'>
      {loading && !(newsData.length > 0) ? (
        <BottomNewsLoading />
      ) : (
        <ul className='bottom-news__ul'>
          {newsData.map((newsItem, i) => (
            <BottomNewsItem key={i} newsItem={newsItem} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default BottomNews;
