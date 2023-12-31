import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../../app/rootReducer';
import BottomNews from '../../../common/components/BottomNews';
import BottomNewsLoading from '../../../common/components/BottomNews/BottomNewsLoading';
import FetchErrorContainer from '../../../common/containers/FetchErrorContainer';

const QuoteNewsContainer = () => {
  const { data, loading, error } = useSelector(
    (state: AppState) => state.quote.newsData
  );

  if (error || !data)
    return <FetchErrorContainer error='Failed to fetch news' />;

  if (loading) return <BottomNewsLoading />;

  return <BottomNews newsData={data} />;
};

export default QuoteNewsContainer;
