import React, { useEffect, useState } from 'react';
import '../../../css/home/news/newsli.css';
import { getTimeAgoString, truncate } from '../../helpers';

const NewsListItem = ({ article }) => {
  const { site, title, text, publishedDate, url, image } = article;

  const [descriptionLength, setDescriptionLength] = useState(150);
  const [titleLength, setTitleLength] = useState(120);

  useEffect(() => {
    let resizer = new ResizeObserver(() => {
      if (window.innerWidth <= 400 || window.screen.width <= 400) {
        setDescriptionLength(35);
        setTitleLength(40);
      } else if (window.innerWidth <= 500 || window.screen.width <= 500) {
        setDescriptionLength(50);
        setTitleLength(60);
      } else if (window.innerWidth <= 800 || window.screen.width <= 800) {
        setDescriptionLength(100);
        setTitleLength(80);
      } else if (window.innerWidth <= 1000 || window.screen.width <= 1000) {
        setDescriptionLength(200);
        setTitleLength(125);
      } else if (window.innerWidth <= 1200 || window.screen.width <= 1200) {
        setDescriptionLength(80);
        setTitleLength(80);
      } else {
        setDescriptionLength(150);
        setTitleLength(120);
      }
    });

    resizer.observe(document.querySelector('html'));
    return () => {
      resizer.unobserve(document.querySelector('html'));
    };
  }, []);

  return (
    <li className='newsli-item'>
      <div className='newsli-image-container'>
        <img className='newsli-image' src={image} alt='' />
      </div>

      <div className='newsli-content'>
        <h2 className='newsli-heading'>
          <a className='newsli-link' href={url}>
            {title.length > titleLength ? (
              <>{truncate(title, titleLength)}&hellip;</>
            ) : (
              title
            )}
          </a>
        </h2>
        <p className='newsli-meta'>
          {site} - <em>{getTimeAgoString(publishedDate)}</em>
        </p>
        {text.length > descriptionLength ? (
          <>{truncate(text, descriptionLength)}&hellip;</>
        ) : (
          text
        )}
      </div>
    </li>
  );
};

export default NewsListItem;
