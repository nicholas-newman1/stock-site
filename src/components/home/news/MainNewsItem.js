import React, { useContext } from 'react';
import '../../../css/mainNewsItem.css';
import { getTimeAgoString, truncate } from '../../helpers';
import { NewsContext } from '../../../context/NewsContext';

const MainNewsItem = () => {
  const { mainNewsArticle } = useContext(NewsContext);

  const {
    source,
    title,
    description,
    publishedAt,
    url,
    image,
  } = mainNewsArticle;

  return (
    <div className='main-news-item'>
      <img className='main-news-image' src={image} alt='' />
      <div className='main-news-content'>
        <h1 className='main-news-heading'>
          <a href={url}>{title}</a>
        </h1>
        <p className='main-news-meta'>
          {source.name} - <em>{getTimeAgoString(publishedAt)}</em>
        </p>
        <p className='main-news-description'>
          {description.length > 150 ? (
            <>{truncate(description, 150)}&hellip;</>
          ) : (
            description
          )}
        </p>
      </div>
    </div>
  );
};

export default MainNewsItem;