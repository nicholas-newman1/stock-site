import React, { useEffect, useState } from 'react';
import BottomNewsItem from './BottomNewsItem';
import BottomNewsLoading from './BottomNewsLoading';
import { dummyStockNews } from '../../dummyData';
import './bottomNews.css';
import useFetch from '../../hooks/useFetch';

const BottomNews = ({ symbol = undefined, shift = false }) => {
  const [newsData, setNewsData] = useState([]);

  const { data, loading } = useFetch(
    [], // initial value
    'stock_news', // endpoint
    dummyStockNews, // dummy data
    `limit=11${symbol ? `&tickers=${symbol}` : ''}` // params
  );

  useEffect(() => {
    // fetchNewsData();
    if (data.length > 0) {
      /* This component is used on the HomePage. The HomePage displays the first
      article returned in its own component at the top of the screen. To avoid repetition, the shift prop is set to true, which will remove the first
      article. If shift is not set to true, the last news item is popped off to
      keep the array at an even length of 10 */
      const newsData = [...data];
      shift ? newsData.shift() : newsData.pop();
      setNewsData(newsData);
    }
    //eslint-disable-next-line
  }, [data]);

  return (
    <div className='bottom-news'>
      {loading && !newsData.length > 0 ? (
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
