import { fetchFromAPI } from '../api';
import { SetNewsLoading, SetNewsData } from '../types/actionTypes';
import { NewsItem } from '../types/APITypes';

const setNewsLoading = (status: boolean): SetNewsLoading => ({
  type: 'SET_NEWS_LOADING',
  payload: status,
});

const setNewsData = (data: NewsItem[]): SetNewsData => ({
  type: 'SET_NEWS_DATA',
  payload: data,
});

export const fetchNews = (params = '') => {
  return fetchFromAPI('stock_news', setNewsLoading, setNewsData, params);
};
