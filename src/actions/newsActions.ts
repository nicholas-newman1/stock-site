import { Dispatch } from 'redux';
import { AppState } from '../reducers/rootReducer';
import { AppActions, SetNewsLoading, SetNewsData } from '../types/actionTypes';
import { disableRealData } from './realDataActions';

const setNewsLoading = (status: boolean): SetNewsLoading => ({
  type: 'SET_NEWS_LOADING',
  payload: status,
});

const setNewsData = (data: NewsItem[]): SetNewsData => ({
  type: 'SET_NEWS_DATA',
  payload: data,
});

export const fetchNews = (params = '') => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    dispatch(setNewsLoading(true));
    if (getState().realData.status) {
      fetch(
        `https://financialmodelingprep.com/api/v3/stock_news?apikey=${
          process.env.REACT_APP_FMP_KEY
        }${params && '&' + params}`
      )
        .then((res) => res.json())
        .then((data) => dispatch(setNewsData(data)))
        .catch((err) => dispatch(disableRealData(err.message)));
    } else {
      fetch('../dummyData/stock_news.json')
        .then((res) => res.json())
        .then((data) => dispatch(setNewsData(data)));
    }
  };
};
