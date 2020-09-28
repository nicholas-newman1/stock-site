import React from 'react';
import '../../css/mainNewsItem.css';
import { getTimeAgoString, truncate } from '../helpers';

const MainNewsItem = ({ article }) => {
  const { author, title, description, publishedAt, url, urlToImage } = article;
  return (
    <div
      className='main-news-item'
      style={{ backgroundImage: `url(${urlToImage})` }}
    >
      <img className='main-news-image' src={urlToImage} />
      <div className='main-news-content'>
        <h1 className='main-news-heading'>
          <a href={url}>{title}</a>
        </h1>
        <p className='main-news-meta'>
          {author} - <em>{getTimeAgoString(publishedAt)}</em>
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
