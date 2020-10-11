import React from 'react';
import { getTimeAgoString, truncate } from '../helpers';
import '../../css/quote/quoteNewsItem.css';

const QuoteNewsItem = ({ newsItem }) => {
  const { image, url, title, publishedDate, site, text } = newsItem;
  return (
    <li className='quote-news-item'>
      <div className='quote-news-item-image-container'>
        <img className='quote-news-item-image' src={image} alt='' />
      </div>

      <div className='quote-news-item-content'>
        <h2 className='quote-news-item-heading'>
          <a className='quote-news-item-link' href={url}>
            {title}
          </a>
        </h2>

        <p className='quote-news-item-meta'>
          {site.replace(/(^\w+:|^)\/\//, '').replace(/www./, '')} -{' '}
          <em>{getTimeAgoString(publishedDate)}</em>
        </p>
        {text.length > 75 ? <>{truncate(text, 75)}&hellip;</> : text}
      </div>
    </li>
  );
};

export default QuoteNewsItem;
