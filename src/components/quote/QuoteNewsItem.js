import React, { useEffect, useState } from 'react';
import { getTimeAgoString, truncate } from '../helpers';
import '../../css/quote/quoteNewsItem.css';

const QuoteNewsItem = ({ newsItem }) => {
  const [truncateLength, setTruncateLength] = useState(150);
  const { image, url, title, publishedDate, site, text } = newsItem;

  useEffect(() => {
    let resizer = new ResizeObserver(() => {
      if (window.innerWidth <= 400 || window.screen.width <= 400) {
        setTruncateLength(50);
      } else if (window.innerWidth <= 900 || window.screen.width <= 900) {
        setTruncateLength(150);
      } else {
        setTruncateLength(500);
      }
    });

    resizer.observe(document.querySelector('html'));
  }, []);

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
        {text.length > truncateLength ? (
          <>{truncate(text, truncateLength)}&hellip;</>
        ) : (
          text
        )}
      </div>
    </li>
  );
};

export default QuoteNewsItem;
