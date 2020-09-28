import React, { useEffect, useState, useContext } from 'react';
import { APIKeyContext } from '../../context/APIKeyContext';
import NewsListItem from './NewsListItem';
import MainNewsItem from './MainNewsItem';
import Spinner from '../Spinner';
import '../../css/newsList.css';

const NewsList = () => {
  const [newsArray, setNewsArray] = useState([]);
  const { newsapiKey } = useContext(APIKeyContext);
  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=ca&category=business&apiKey=${newsapiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
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
        setNewsArray(newData);
      });
  }, []);

  return !newsArray.length > 0 ? (
    <Spinner />
  ) : (
    <div>
      <MainNewsItem article={newsArray.shift()} />
      <ul className='news-list'>
        {newsArray.map((article) => (
          <NewsListItem key={article.url} article={article} />
        ))}
      </ul>
    </div>
  );
};

export default NewsList;
