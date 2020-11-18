import React, { useContext, useEffect, useState } from 'react';
import './mainNewsItem.css';
import { getTimeAgoString, truncate } from '../../../helpers';
import { RealDataContext } from '../../../context/RealDataContext';
import { dummyNewsData } from '../../../dummyData';

const MainNewsItem = () => {
  const [descriptionLength, setDescriptionLength] = useState(150);
  const [titleLength, setTitleLength] = useState(120);
  const [mainNewsArticle, setMainNewsArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const { realData } = useContext(RealDataContext);

  useEffect(() => {
    let resizer = new ResizeObserver(() => {
      if (window.innerWidth <= 400 || window.screen.width <= 400) {
        setDescriptionLength(65);
        setTitleLength(60);
      } else if (window.innerWidth <= 600 || window.screen.width <= 600) {
        setDescriptionLength(100);
        setTitleLength(80);
      } else if (window.innerWidth <= 800 || window.screen.width <= 800) {
        setDescriptionLength(200);
        setTitleLength(85);
      } else if (window.innerWidth <= 1000 || window.screen.width <= 1000) {
        setDescriptionLength(200);
        setTitleLength(130);
      } else if (window.innerWidth <= 1200 || window.screen.width <= 1200) {
        setDescriptionLength(180);
        setTitleLength(85);
      } else {
        setDescriptionLength(200);
        setTitleLength(120);
      }
    });

    resizer.observe(document.querySelector('html'));
    return () => {
      resizer.unobserve(document.querySelector('html'));
    };
  }, []);

  const fetchMainNewsArticle = async () => {
    setLoading(true);
    let data;
    if (realData) {
      const res = await fetch(
        `https://financialmodelingprep.com/api/v3/stock_news?limit=1&apikey=${process.env.REACT_APP_FMP_KEY}`
      );
      data = await res.json();
    } else {
      data = [...dummyNewsData];
    }
    setMainNewsArticle(data[0]);
    setLoading(false);
  };

  useEffect(() => {
    fetchMainNewsArticle();
    //eslint-disable-next-line
  }, [realData]);

  // const { mainNewsArticle } = useContext(NewsContext);
  const { site, title, text, publishedDate, url, image } = mainNewsArticle;

  return loading ? (
    <div className='loading-main-news-container'>
      <div className='loading-main-news-div' />
    </div>
  ) : (
    <div className='main-news-item'>
      <div
        className='main-news-image'
        style={{ backgroundImage: `url(${image})` }}
      />

      <div className='main-news-content'>
        <h1 className='main-news-heading'>
          <a href={url}>
            {title.length > titleLength ? (
              <>{truncate(title, titleLength)}&hellip;</>
            ) : (
              title
            )}
          </a>
        </h1>
        <p className='main-news-meta'>
          {site} - <em>{getTimeAgoString(publishedDate)}</em>
        </p>
        <p className='main-news-description'>
          {text.length > descriptionLength ? (
            <>{truncate(text, descriptionLength)}&hellip;</>
          ) : (
            text
          )}
        </p>
      </div>
    </div>
  );
};

export default MainNewsItem;