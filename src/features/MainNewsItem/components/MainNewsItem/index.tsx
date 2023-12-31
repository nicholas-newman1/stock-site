import React from 'react';
import { getTimeAgoString, truncate } from '../../../../common/utils/helpers';
import './mainNewsItem.css';

interface Props {
  data: NewsItem;
}

const MainNewsItem: React.FC<Props> = ({ data }) => {
  if (!data) return null
  const { site, title, text, publishedDate, url, image } = data;

  return (
    <a href={url} className='main-news-item'>
      <div
        className='main-news-item__image'
        style={{ backgroundImage: `url(${image})` }}
      />

      <div className='main-news-item__content'>
        <h1 className='main-news-item__heading'>
          {title.length > 100 ? <>{truncate(title, 100)}&hellip;</> : title}
        </h1>
        <p className='main-news-item__meta'>
          {site} - <em>{getTimeAgoString(Date.parse(publishedDate))}</em>
        </p>
        <p className='main-news-item__description'>
          {text.length > 200 ? <>{truncate(text, 200)}&hellip;</> : text}
        </p>
      </div>
    </a>
  );
};

export default MainNewsItem;
