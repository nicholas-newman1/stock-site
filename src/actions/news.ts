import { FetchNewsAction } from '../types/news';

export const fetchNewsAction = (symbol: string): FetchNewsAction => ({
  type: 'FETCH_NEWS',
  payload: symbol,
});
