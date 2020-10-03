import React, { createContext, useState } from 'react';
//import { APIKeyContext } from './APIKeyContext';

export const NewsContext = createContext();

export const NewsProvider = (props) => {
  //const { newsapiKey } = useContext(APIKeyContext);
  const [mainNewsArticle, setMainNewsArticle] = useState({});
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNewsArticles = async () => {
    setLoading(true);
    const res = await fetch(
      `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=ca&category=business&apiKey=${process.env.REACT_APP_NEWSAPI_KEY}`
    );
    const data = await res.json();
    const newData = [];
    data.articles.forEach((article) => {
      if (
        newData.findIndex((item) => item.title === article.title) === -1 &&
        newData.findIndex(
          (item) => item.description === article.description
        ) === -1 &&
        article.urlToImage
      ) {
        newData.push(article);
      } // remove duplicates
    });
    setMainNewsArticle(newData.shift());
    setNewsList(newData);
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
