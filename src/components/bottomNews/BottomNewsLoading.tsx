import React from 'react';
import './bottomNewsLoading.css';

const BottomNewsLoading: React.FC = () => {
  let loadingItems = [];
  for (let i = 0; i < 10; i++) {
    loadingItems.push(
      <li key={i} className='bottom-news__item--loading'>
        <div className='bottom-news__div--loading' />
      </li>
    );
  }
  return <ul className='bottom-news__ul--loading'>{loadingItems}</ul>;
};

export default BottomNewsLoading;
