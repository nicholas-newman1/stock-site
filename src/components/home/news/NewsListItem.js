import React from 'react';
import '../../../css/newsli.css';
import { getTimeAgoString, truncate } from '../../helpers';

const NewsListItem = ({ article }) => {
  const { author, title, description, publishedAt, url, urlToImage } = article;

  return (
    <li className='newsli-item' key={url}>
      <div className='newsli-image-container'>
        <img className='newsli-image' src={urlToImage} alt='' />
      </div>

      <div className='newsli-content'>
        <h2 className='newsli-heading'>
          <a className='newsli-link' href={url}>
            {title}
          </a>
        </h2>
        <p className='newsli-meta'>
          {author} - <em>{getTimeAgoString(publishedAt)}</em>
        </p>
        {description.length > 150 ? (
          <>{truncate(description, 150)}&hellip;</>
        ) : (
          description
        )}
      </div>
    </li>
  );
};

export default NewsListItem;
