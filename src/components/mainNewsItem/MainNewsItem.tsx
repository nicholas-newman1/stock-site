import React from 'react';
import MainNewsItemLoading from '../mainNewsItemLoading/MainNewsItemLoading';
import { getTimeAgoString, truncate } from '../../helpers';
import './mainNewsItem.css';

interface Props {
  data: NewsItem;
  loading: boolean;
}

const MainNewsItem: React.FC<Props> = ({ data, loading }) => {
  if (loading) return <MainNewsItemLoading />;

  const { site, title, text, publishedDate, url, image } = data;

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
