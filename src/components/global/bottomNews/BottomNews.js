import React, { useEffect, useState, useContext } from 'react';
import BottomNewsItem from './BottomNewsItem';
import BottomNewsLoading from './BottomNewsLoading';
import { dummyStockNews } from '../../../dummyData';
import './bottomNews.css';
import { RealDataContext } from '../../../context/RealDataContext';

const BottomNews = ({ symbol, shift = false }) => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { realData } = useContext(RealDataContext);

  const fetchNewsData = async () => {
    setLoading(true);
    let data;
    if (realData) {
      let res = await fetch(
        `https://financialmodelingprep.com/api/v3/stock_news?tickers=${
          symbol ? symbol : ''
        }&limit=${shift ? '11' : '10'}&apikey=${process.env.REACT_APP_FMP_KEY}`
      );
      data = await res.json();

      // if less than 10 news articles returned, push general news into data until it reaches 10
      if (data.length < 10) {
        res = await fetch(
          `https://financialmodelingprep.com/api/v3/stock_news?limit=11&apikey=${process.env.REACT_APP_FMP_KEY}`
        );
        const generalData = await res.json();
        let i = 0;
        while (data.length < 10) {
          data.push(generalData[i]);
          i++;
        }
      }
    } else {
      data = dummyStockNews;
    }
    if (shift) data.shift();
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
        <BottomNewsLoading />
      ) : (
        <ul className='bottom-news-ul'>
          {newsData.map((newsItem, i) => (
            <BottomNewsItem key={i} newsItem={newsItem} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default BottomNews;
