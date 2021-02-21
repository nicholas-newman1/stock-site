import React from 'react';
import { NewsItem } from '../../types/APITypes';
import BottomNewsItem from './BottomNewsItem';
import BottomNewsLoading from './BottomNewsLoading';
import HorizontalRule from '../HorizontalRule';
import './bottomNews.css';
import FetchErrorContainer from '../../containers/FetchErrorContainer';

interface Props {
  newsData: NewsItem[];
  loading: boolean;
  error: string;
}

const BottomNews: React.FC<Props> = ({ newsData, loading, error }) => {
  return (
    <div className='bottom-news'>
      <HorizontalRule />
      {loading ? (
        <BottomNewsLoading />
      ) : error ? (
        <FetchErrorContainer error='Failed to fetch news' />
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
