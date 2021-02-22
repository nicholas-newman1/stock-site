import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BottomNews from '../../components/BottomNews';
import { AppState } from '../../../app/rootReducer';
import { fetchNews } from '../../redux/modules/news';

const GeneralBottomNewsContainer = () => {
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector((state: AppState) => state.news);

  useEffect(() => {
    dispatch(fetchNews('limit=10&tickers=AAPL,FB,AMZN,TSLA'));
    //eslint-disable-next-line
  }, []);

  return <BottomNews newsData={data} loading={loading} error={error} />;
};

export default GeneralBottomNewsContainer;
