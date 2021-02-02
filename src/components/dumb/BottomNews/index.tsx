import React from 'react';
import { NewsItem } from '../../../types/APITypes';
import BottomNewsItem from '../BottomNewsItem';
import BottomNewsLoading from '../BottomNewsLoading';
import './bottomNews.css';

interface Props {
  newsData: NewsItem[];
  loading: boolean;
}

const BottomNews: React.FC<Props> = ({ newsData, loading }) => {
  return (
    <div className='bottom-news'>
      {loading || !(newsData.length > 0) ? (
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
