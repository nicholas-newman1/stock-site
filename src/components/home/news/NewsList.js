import React, { useContext } from 'react';
import NewsListItem from './NewsListItem';
import '../../../css/home/news/newsList.css';
import { NewsContext } from '../../../context/NewsContext';

const NewsList = () => {
  const { newsList } = useContext(NewsContext);

  return (
    <div>
      <ul className='news-list'>
        {newsList.map((article) => (
          <NewsListItem key={article.url} article={article} />
        ))}
      </ul>
    </div>
  );
};

export default NewsList;
