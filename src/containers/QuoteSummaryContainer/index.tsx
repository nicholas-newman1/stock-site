import React from 'react';
import { useSelector } from 'react-redux';
import QuoteSummary from '../../components/QuoteSummary';
import { AppState } from '../../reducers/rootReducer';

const QuoteSummaryContainer = () => {
  const { data, loading } = useSelector(
    (state: AppState) => state.quote.quoteData
  );
  const quote = data[0];

  return <QuoteSummary quote={quote} loading={loading} />;
};

export default QuoteSummaryContainer;
