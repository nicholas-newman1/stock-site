import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../app/rootReducer';
import FetchErrorContainer from '../../common/containers/FetchErrorContainer';
import MainNewsItem from './components/MainNewsItem';
import { fetchMainNewsItem } from './mainNewsItemSlice';

const MainNewsItemContainer = () => {
  const { data, loading, error } = useSelector(
    (state: AppState) => state.mainNewsItem
  );

  const realDataStatus = useSelector(
    (state: AppState) => state.realData.status
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMainNewsItem());
  }, [dispatch, realDataStatus]);

  if (error)
    return <FetchErrorContainer error='Failed to fetch main news item' />;

  return <MainNewsItem data={data} loading={loading} />;
};

export default MainNewsItemContainer;
