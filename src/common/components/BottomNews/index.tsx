import React from 'react';
import BottomNewsItem from './BottomNewsItem';
import BottomNewsLoading from './BottomNewsLoading';
import HorizontalRule from '../HorizontalRule';
import './bottomNews.css';
import { NewsItem } from '../../types/APITypes';

interface Props {
  newsData: NewsItem[];
  loading: boolean;
}

const BottomNews: React.FC<Props> = ({ newsData, loading }) => {
  return (
    <div className='bottom-news'>
      <HorizontalRule />
      {loading ? (
        <BottomNewsLoading />
      ) : (
        <ul className='bottom-news__ul'>
          {newsData.map((newsItem, i) => (
            <BottomNewsItem key={i} newsItem={newsItem} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default BottomNews;
