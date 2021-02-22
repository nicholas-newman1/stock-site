import React from 'react';
import { useSelector } from 'react-redux';
import QuoteSummary from '../QuoteSummary';
import { AppState } from '../../../reducers/rootReducer';

const QuoteSummaryContainer = () => {
  const { data, loading, error } = useSelector(
    (state: AppState) => state.quote.quoteData
  );
  const quote = data[0];

  return <QuoteSummary quote={quote} loading={loading} error={error} />;
};

export default QuoteSummaryContainer;
