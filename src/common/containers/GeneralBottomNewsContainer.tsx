import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BottomNews from '../components/BottomNews';
import { AppState } from '../../app/rootReducer';
import { fetchNews } from '../redux/modules/news';
import FetchErrorContainer from './FetchErrorContainer';

const GeneralBottomNewsContainer = () => {
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector((state: AppState) => state.news);
  const realDataStatus = useSelector(
    (state: AppState) => state.realData.status
  );

  useEffect(() => {
    dispatch(fetchNews('limit=10&tickers=AAPL,FB,AMZN,TSLA'));
  }, [dispatch, realDataStatus]);

  if (error) return <FetchErrorContainer error='Failed to fetch news' />;

  return <BottomNews newsData={data} loading={loading} />;
};

export default GeneralBottomNewsContainer;
