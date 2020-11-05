import React, { useEffect, useState } from 'react';
import { getTimeAgoString, truncate } from '../../helpers';
import '../../../css/quote/quoteNewsItem.css';

const QuoteNewsItem = ({ newsItem }) => {
  const [truncateLength, setTruncateLength] = useState(150);

  useEffect(() => {
    let resizer = new ResizeObserver(() => {
      if (window.innerWidth <= 400 || window.screen.width <= 400) {
        setTruncateLength(50);
      } else if (window.innerWidth <= 600 || window.screen.width <= 600) {
        setTruncateLength(100);
      } else if (window.innerWidth <= 1000 || window.screen.width <= 1000) {
        setTruncateLength(200);
      } else {
        setTruncateLength(150);
      }
    });

    resizer.observe(document.querySelector('html'));
    return () => {
      resizer.unobserve(document.querySelector('html'));
    };
  }, []);

  const { image, url, title, publishedDate, site, text } = newsItem;

  return (
    <li className='quote-news-item'>
      <div className='quote-news-image-container'>
        <img className='quote-news-image' src={image} alt='' />
      </div>

      <div className='quote-news-content'>
        <h2 className='quote-news-heading'>
          <a className='quote-news-link' href={url}>
            {title}
          </a>
        </h2>

        <p className='quote-news-meta'>
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
