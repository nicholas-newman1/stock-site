import React, { useEffect, useState } from 'react';
import '../../../css/quote/quoteNewsItem.css';
import { getTimeAgoString, truncate } from '../../helpers';

const QuoteGeneralNewsItem = ({ newsItem }) => {
  const [truncateLength, setTruncateLength] = useState(150);
  const { source, title, description, publishedAt, url, image } = newsItem;

  useEffect(() => {
    let resizer = new ResizeObserver(() => {
      if (window.innerWidth <= 400 || window.screen.width <= 400) {
        setTruncateLength(50);
      } else if (window.innerWidth <= 600 || window.screen.width <= 900) {
        setTruncateLength(100);
      } else if (window.innerWidth <= 1000 || window.screen.width <= 900) {
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
          {source.name} - <em>{getTimeAgoString(publishedAt)}</em>
        </p>
        {description.length > truncateLength ? (
          <>{truncate(description, truncateLength)}&hellip;</>
        ) : (
          description
        )}
      </div>
    </li>
  );
};

export default QuoteGeneralNewsItem;
