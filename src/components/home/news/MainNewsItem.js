import React, { useContext } from 'react';
import '../../../css/home/news/mainNewsItem.css';
import { getTimeAgoString, truncate } from '../../helpers';
import { NewsContext } from '../../../context/NewsContext';

const MainNewsItem = () => {
  const { mainNewsArticle } = useContext(NewsContext);

  const { site, title, text, publishedDate, url, image } = mainNewsArticle;

  return (
    <div className='main-news-item'>
      <div
        className='main-news-image'
        style={{ backgroundImage: `url(${image})` }}
      />

      <div className='main-news-content'>
        <h1 className='main-news-heading'>
          <a href={url}>{title}</a>
        </h1>
        <p className='main-news-meta'>
          {site} - <em>{getTimeAgoString(publishedDate)}</em>
        </p>
        <p className='main-news-description'>
          {text.length > 150 ? <>{truncate(text, 150)}&hellip;</> : text}
        </p>
      </div>
    </div>
  );
};

export default MainNewsItem;
