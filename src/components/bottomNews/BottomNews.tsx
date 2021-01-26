import React from 'react';
import BottomNewsItem from '../bottomNewsItem/BottomNewsItem';
import BottomNewsLoading from '../bottomNewsLoading/BottomNewsLoading';
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
