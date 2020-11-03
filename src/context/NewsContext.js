import React, { createContext, useState, useContext } from 'react';
import { dummyNewsData } from '../components/dummyData';
import { RealDataContext } from './RealDataContext';

export const NewsContext = createContext();

export const NewsProvider = (props) => {
  const [mainNewsArticle, setMainNewsArticle] = useState({});
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { realData } = useContext(RealDataContext);

  const fetchNewsArticles = async () => {
    setLoading(true);
    let data;
    if (realData) {
      const res = await fetch(
        `https://financialmodelingprep.com/api/v3/stock_news?limit=10&apikey=${process.env.REACT_APP_FMP_KEY}`
      );
      data = await res.json();
    } else {
      data = [...dummyNewsData];
    }
    setMainNewsArticle(data.shift());
    setNewsList(data);
    setLoading(false);
  };

  return (
    <NewsContext.Provider
      value={{
        fetchNewsArticles,
        mainNewsArticle,
        newsList,
        loading,
      }}
    >
      {props.children}
    </NewsContext.Provider>
  );
};
