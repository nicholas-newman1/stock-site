import React from 'react';
import './mainNewsItem.css';
import { getTimeAgoString, truncate } from '../../helpers';
import { dummyNewsData } from '../../dummyData';
import useFetch from '../../hooks/useFetch';

const MainNewsItem: React.FC = () => {
  const { data, loading } = useFetch(
    [], // intial value
    'stock_news', // endpoint
    dummyNewsData, // dummy data
    'limit=1' // params
  );

  if (loading) {
    return (
      <div className='loading-main-news'>
        <div className='loading-main-news__div' />
      </div>
    );
  }

  const { site, title, text, publishedDate, url, image } = data[0];

  return (
    <div className='main-news__item'>
      <div
        className='main-news__image'
        style={{ backgroundImage: `url(${image})` }}
      />

      <div className='main-news__content'>
        <h1 className='main-news__heading'>
          <a href={url}>
            {title.length > 100 ? <>{truncate(title, 100)}&hellip;</> : title}
          </a>
        </h1>
        <p className='main-news__meta'>
          {site} - <em>{getTimeAgoString(Date.parse(publishedDate))}</em>
        </p>
        <p className='main-news__description'>
          {text.length > 200 ? <>{truncate(text, 200)}&hellip;</> : text}
        </p>
      </div>
    </div>
  );
};

export default MainNewsItem;
