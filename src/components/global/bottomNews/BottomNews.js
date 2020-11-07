import React, { useEffect, useState, useContext } from 'react';
import QuoteNewsItem from './BottomNewsItem';
import QuoteNewsLoading from './BottomNewsLoading';
import { dummyStockNews } from '../../../dummyData';
import '../../../css/global/bottomNews/bottomNews.css';
import { RealDataContext } from '../../../context/RealDataContext';

const QuoteNews = ({ symbol }) => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { realData } = useContext(RealDataContext);

  const fetchNewsData = async () => {
    setLoading(true);
    let data;
    if (realData) {
      const res = await fetch(
        `https://financialmodelingprep.com/api/v3/stock_news?tickers=${
          symbol ? symbol : ''
        }&limit=10&apikey=${process.env.REACT_APP_FMP_KEY}`
      );
      data = await res.json();
    } else {
      data = dummyStockNews;
    }
    setNewsData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchNewsData();
    //eslint-disable-next-line
  }, [realData]);

  return (
    <div className='bottom-news-container'>
      {loading ? (
        <QuoteNewsLoading />
      ) : (
        <ul className='bottom-news-ul'>
          {newsData.map((newsItem, i) => (
            <QuoteNewsItem key={i} newsItem={newsItem} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default QuoteNews;
