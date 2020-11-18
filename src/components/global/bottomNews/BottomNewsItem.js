import React, { useEffect, useState } from 'react';
import { getTimeAgoString, truncate } from '../../../helpers';
import './bottomNewsItem.css';

const QuoteNewsItem = ({ newsItem }) => {
  const [descriptionLength, setDescriptionLength] = useState(150);
  const [titleLength, setTitleLength] = useState(120);

  useEffect(() => {
    const item = document.querySelector('.bottom-news-item');

    let resizer = new ResizeObserver(() => {
      if (item.clientWidth <= 300) {
        setDescriptionLength(0);
        setTitleLength(70);
      } else if (item.clientWidth <= 500) {
        setDescriptionLength(80);
        setTitleLength(80);
      } else if (item.clientWidth <= 800) {
        setDescriptionLength(100);
        setTitleLength(80);
      } else if (item.clientWidth <= 1000) {
        setDescriptionLength(200);
        setTitleLength(125);
      } else {
        setDescriptionLength(150);
        setTitleLength(120);
      }
    });

    resizer.observe(item);
    return () => {
      resizer.unobserve(item);
    };
  }, []);

  const { image, url, title, publishedDate, site, text } = newsItem;

  return (
    <li className='bottom-news-item'>
      <div className='bottom-news-image-container'>
        <img className='bottom-news-image' src={image} alt='' />
      </div>

      <div className='bottom-news-content'>
        <h2 className='bottom-news-heading'>
          <a className='bottom-news-link' href={url}>
            {title.length > titleLength ? (
              <>{truncate(title, titleLength)}&hellip;</>
            ) : (
              title
            )}
          </a>
        </h2>

        <p className='bottom-news-meta'>
          {site.replace(/(^\w+:|^)\/\//, '').replace(/www./, '')} -{' '}
          <em>{getTimeAgoString(publishedDate)}</em>
        </p>
        {text.length > descriptionLength
          ? descriptionLength > 0 && (
              <p className='bottom-news-text'>
                {truncate(text, descriptionLength)}&hellip;
              </p>
            )
          : text}
      </div>
    </li>
  );
};

export default QuoteNewsItem;
