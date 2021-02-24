import React from 'react';
import BottomNewsItem from './BottomNewsItem';
import HorizontalRule from '../HorizontalRule';
import './bottomNews.css';
import { NewsItem } from '../../types/APITypes';

interface Props {
  newsData: NewsItem[];
}

const BottomNews: React.FC<Props> = ({ newsData }) => {
  return (
    <div className='bottom-news'>
      <HorizontalRule />
      <ul className='bottom-news__ul'>
        {newsData.map((newsItem, i) => (
          <BottomNewsItem key={i} newsItem={newsItem} />
        ))}
      </ul>
    </div>
  );
};

export default BottomNews;
