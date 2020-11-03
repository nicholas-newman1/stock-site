import React from 'react';
import '../../../css/home/news/newsli.css';
import { getTimeAgoString, truncate } from '../../helpers';

const NewsListItem = ({ article }) => {
  const { site, title, text, publishedDate, url, image } = article;

  return (
    <li className='newsli-item'>
      <div className='newsli-image-container'>
        <img className='newsli-image' src={image} alt='' />
      </div>

      <div className='newsli-content'>
        <h2 className='newsli-heading'>
          <a className='newsli-link' href={url}>
            {title}
          </a>
        </h2>
        <p className='newsli-meta'>
          {site} - <em>{getTimeAgoString(publishedDate)}</em>
        </p>
        {text.length > 150 ? <>{truncate(text, 150)}&hellip;</> : text}
      </div>
    </li>
  );
};

export default NewsListItem;
