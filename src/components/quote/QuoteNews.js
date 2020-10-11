import React, { useEffect, useState } from 'react';
import QuoteNewsItem from './QuoteNewsItem';
import QuoteNewsLoading from './QuoteNewsLoading';
import { dummyStockNews } from '../dummyData';

const QuoteNews = ({ symbol }) => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState([]);

  const fetchNewsData = async () => {
    setLoading(true);
    // const res = await fetch(
    //   `https://financialmodelingprep.com/api/v3/stock_news?tickers=${symbol}&limit=50&apikey=${process.env.REACT_APP_FMP_KEY}`
    // );
    // const data = await res.json();
    const data = dummyStockNews;
    setNewsData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchNewsData();
  }, []);

  return loading ? (
    <QuoteNewsLoading />
  ) : (
    <ul>
      {newsData.map((newsItem, i) => (
        <QuoteNewsItem key={i} newsItem={newsItem} />
      ))}
    </ul>
  );
};

export default QuoteNews;
