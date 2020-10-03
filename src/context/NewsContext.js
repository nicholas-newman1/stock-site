import React, { createContext, useState } from 'react';

export const NewsContext = createContext();

export const NewsProvider = (props) => {
  const [mainNewsArticle, setMainNewsArticle] = useState({});
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNewsArticles = async () => {
    setLoading(true);
    // const res = await fetch(
    //   `https://gnews.io/api/v4/top-headlines?topic=business&country=ca&token=${process.env.REACT_APP_GNEWS_KEY}`
    // );
    // const data = await res.json();
    // setMainNewsArticle(data.articles.shift());
    // setNewsList(data.articles);
    // setLoading(false);
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
