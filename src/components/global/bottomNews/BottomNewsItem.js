import React, { useEffect, useState } from 'react';
import { getTimeAgoString, truncate } from '../../../helpers';
import './bottomNewsItem.css';

const QuoteNewsItem = ({ newsItem }) => {
  const [descriptionLength, setDescriptionLength] = useState(150);
  const [titleLength, setTitleLength] = useState(120);

  useEffect(() => {
    const item = document.querySelector('.bottom-news__item');

    let resizer = new ResizeObserver(() => {
      if (item.clientWidth <= 300) {
        setDescriptionLength(0);
        setTitleLength(70);
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
    <li className='bottom-news__item'>
      <div className='bottom-news__image-container'>
        <img className='bottom-news__image' src={image} alt='' />
      </div>

      <div className='bottom-news__content'>
        <h2 className='bottom-news__heading'>
          <a className='bottom-news__link' href={url}>
            {title.length > titleLength ? (
              <>{truncate(title, titleLength)}&hellip;</>
            ) : (
              title
            )}
          </a>
        </h2>

        <p className='bottom-news__meta'>
          {site.replace(/(^\w+:|^)\/\//, '').replace(/www./, '')} -{' '}
          <em>{getTimeAgoString(publishedDate)}</em>
        </p>

        {descriptionLength > 0 && (
          <p className='bottom-news__text'>
            {text.length > descriptionLength ? (
              <>{truncate(text, descriptionLength)}&hellip;</>
            ) : (
              text
            )}
          </p>
        )}
      </div>
    </li>
  );
};

export default QuoteNewsItem;
