import React, { useEffect, useState, useContext } from 'react';
import QuoteNewsItem from './QuoteNewsItem';
import QuoteNewsLoading from './QuoteNewsLoading';
import { dummyStockNews } from '../../dummyData';
import '../../../css/quote/quoteNews.css';
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
        `https://financialmodelingprep.com/api/v3/stock_news?tickers=${symbol}&limit=10&apikey=${process.env.REACT_APP_FMP_KEY}`
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

  return loading ? (
    <QuoteNewsLoading />
  ) : (
    <ul className='quote-news-ul'>
      {newsData.map((newsItem, i) => (
        <QuoteNewsItem key={i} newsItem={newsItem} />
      ))}
    </ul>
  );
};

export default QuoteNews;
