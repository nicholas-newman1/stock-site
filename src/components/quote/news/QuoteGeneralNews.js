import React, { useEffect, useState, useContext } from 'react';
import QuoteGeneralNewsItem from './QuoteGeneralNewsItem';
import QuoteNewsLoading from './QuoteNewsLoading';
import { dummyNewsData } from '../../dummyData';
import '../../../css/quote/quoteNews.css';
import { RealDataContext } from '../../../context/RealDataContext';

const QuoteGeneralNews = ({ symbol }) => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState([]);
  const { realData } = useContext(RealDataContext);

  const fetchNewsData = async () => {
    setLoading(true);
    let data;
    if (realData) {
      const res = await fetch(
        `https://gnews.io/api/v4/top-headlines?topic=business&country=ca&lang=en&token=${process.env.REACT_APP_GNEWS_KEY}`
      );
      data = await res.json();
    } else {
      data = dummyNewsData;
    }
    setNewsData(data.articles);
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
        <QuoteGeneralNewsItem key={i} newsItem={newsItem} />
      ))}
    </ul>
  );
};

export default QuoteGeneralNews;
