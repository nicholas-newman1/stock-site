import React from 'react';
import { getTimeAgoString, truncate } from '../../../utils/helpers';
import { NewsItem } from '../../../types/APITypes';
import './bottomNewsItem.css';

interface Props {
  newsItem: NewsItem;
}

const QuoteNewsItem: React.FC<Props> = ({ newsItem }) => {
  const { image, url, title, publishedDate, site, text } = newsItem;

  return (
    <li className='bottom-news-item'>
      <a className='bottom-news-item__link' href={url}>
        <div className='bottom-news-item__image-container'>
          <img className='bottom-news-item__image' src={image} alt='' />
        </div>

        <div className='bottom-news-item__content'>
          <h2 className='bottom-news-item__heading'>
            {title.length > 120 ? <>{truncate(title, 120)}&hellip;</> : title}
          </h2>

          <div className='bottom-news-item__meta'>
            <span className='bottom-news-item__site'>{site}</span>
            {' - '}
            <span className='bottom-news-item__date'>
              {getTimeAgoString(Date.parse(publishedDate))}
            </span>
          </div>

          <p className='bottom-news-item__text'>
            {text.length > 150 ? <>{truncate(text, 150)}&hellip;</> : text}
          </p>
        </div>
      </a>
    </li>
  );
};

export default QuoteNewsItem;
