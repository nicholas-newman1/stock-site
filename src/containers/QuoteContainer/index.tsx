import React from 'react';
import { useSelector } from 'react-redux';
import Quote from '../../components/Quote';
import { AppState } from '../../reducers/rootReducer';

const QuoteContainer = () => {
  const { data, loading, error } = useSelector(
    (state: AppState) => state.quote.quoteData
  );
  const quote = data[0];

  return <Quote quote={quote} loading={loading} error={error} />;
};

export default QuoteContainer;
