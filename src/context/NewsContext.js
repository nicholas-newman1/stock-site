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
        `https://gnews.io/api/v4/top-headlines?topic=business&country=ca&lang=en&token=${process.env.REACT_APP_GNEWS_KEY}`
      );
      data = await res.json();
      data = data.articles;
    } else {
      data = [...dummyNewsData.articles];
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
