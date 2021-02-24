import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../../app/rootReducer';
import BottomNews from '../../../common/components/BottomNews';
import FetchErrorContainer from '../../../common/containers/FetchErrorContainer';

const QuoteNewsContainer = () => {
  const { data, loading, error } = useSelector(
    (state: AppState) => state.quote.newsData
  );

  if (error) return <FetchErrorContainer error='Failed to fetch news' />;

  return <BottomNews newsData={data} loading={loading} />;
};

export default QuoteNewsContainer;
