import React from 'react';
import './bottomNewsLoading.css';

const BottomNewsLoading: React.FC = () => {
  let loadingItems = [];
  for (let i = 0; i < 10; i++) {
    loadingItems.push(
      <li key={i} className='bottom-news-loading__item'>
        <div className='bottom-news-loading__div' />
      </li>
    );
  }
  return <ul className='bottom-news-loading'>{loadingItems}</ul>;
};

export default BottomNewsLoading;
