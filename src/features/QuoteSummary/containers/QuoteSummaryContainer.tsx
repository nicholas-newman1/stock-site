import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../../app/rootReducer';
import QuoteSummary from '../components/QuoteSummary';
import FetchErrorContainer from '../../../common/containers/FetchErrorContainer';
import QuoteSummaryLoading from '../components/QuoteSummaryLoading';

const QuoteSummaryContainer = () => {
  const { data, loading, error } = useSelector(
    (state: AppState) => state.quote.quoteData
  );

  const quote = data[0] || {};

  if (loading) return <QuoteSummaryLoading />;
  if (error) return <FetchErrorContainer error='Failed to fetch quote' />;
  if (!data.length) return <h2>No Summary Data Available</h2>;

  return <QuoteSummary quote={quote} />;
};

export default QuoteSummaryContainer;
