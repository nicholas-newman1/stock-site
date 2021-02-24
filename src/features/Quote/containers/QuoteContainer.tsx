import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../../app/rootReducer';
import Quote from '../components/Quote';
import FetchErrorContainer from '../../../common/containers/FetchErrorContainer';

const QuoteContainer = () => {
  const { data, loading, error } = useSelector(
    (state: AppState) => state.quote.quoteData
  );

  const quote = data[0] || {};

  if (error) return <FetchErrorContainer error='Failed to fetch quote' />;

  return <Quote quote={quote} loading={loading} />;
};

export default QuoteContainer;
