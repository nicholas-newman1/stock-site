import { fetchFromAPI } from '../utils/api';
import {
  FetchNewsRequest,
  FetchNewsSuccess,
  FetchNewsFailure,
} from '../types/actionTypes';
import { NewsItem } from '../types/APITypes';

const fetchNewsRequest = (): FetchNewsRequest => ({
  type: 'FETCH_NEWS_REQUEST',
});
const fetchNewsSuccess = (data: NewsItem[]): FetchNewsSuccess => ({
  type: 'FETCH_NEWS_SUCCESS',
  payload: data,
});
const fetchNewsFailure = (error: string): FetchNewsFailure => ({
  type: 'FETCH_NEWS_FAILURE',
  payload: error,
});

export const fetchNews = (params = '') => {
  return fetchFromAPI(
    'stock_news',
    'news',
    fetchNewsRequest,
    fetchNewsSuccess,
    fetchNewsFailure,
    params
  );
};
