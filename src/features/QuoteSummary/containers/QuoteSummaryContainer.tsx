import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../../app/rootReducer';
import QuoteSummary from '../components/QuoteSummary';
import FetchErrorContainer from '../../../common/containers/FetchErrorContainer';

const QuoteSummaryContainer = () => {
  const { data, loading, error } = useSelector(
    (state: AppState) => state.quote.quoteData
  );

  const quote = data[0] || {};

  if (error) return <FetchErrorContainer error='Failed to fetch quote' />;

  return <QuoteSummary quote={quote} loading={loading} />;
};

export default QuoteSummaryContainer;
