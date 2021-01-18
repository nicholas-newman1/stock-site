import React from 'react';
import { getTimeAgoString, truncate } from '../../helpers';
import './bottomNewsItem.css';

interface Props {
  //newsItem: NewsItem;
  newsItem: any;
}

const QuoteNewsItem: React.FC<Props> = ({ newsItem }) => {
  const { image, url, title, publishedDate, site, text } = newsItem;

  return (
    <li className='bottom-news__item'>
      <div className='bottom-news__image-container'>
        <img className='bottom-news__image' src={image} alt='' />
      </div>

      <div className='bottom-news__content'>
        <h2 className='bottom-news__heading'>
          <a className='bottom-news__link' href={url}>
            {title.length > 120 ? <>{truncate(title, 120)}&hellip;</> : title}
          </a>
        </h2>

        <p className='bottom-news__meta'>
          {site.replace(/(^\w+:|^)\/\//, '').replace(/www./, '')} -{' '}
          <em>{getTimeAgoString(Date.parse(publishedDate))}</em>
        </p>

        <p className='bottom-news__text'>
          {text.length > 150 ? <>{truncate(text, 150)}&hellip;</> : text}
        </p>
      </div>
    </li>
  );
};

export default QuoteNewsItem;
