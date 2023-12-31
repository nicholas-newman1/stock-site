import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../../app/rootReducer';
import Quote from '../components/Quote';
import FetchErrorContainer from '../../../common/containers/FetchErrorContainer';
import Spinner from '../../../common/components/Spinner';

const QuoteContainer = () => {
  const { data, loading, error } = useSelector(
    (state: AppState) => state.quote.quoteData
  );

  if (loading) return <Spinner />;
  if (error || !data)
    return <FetchErrorContainer error='Failed to fetch quote' />;
  if (!data.length) return <h1>No Quote Available</h1>;

  const quote = data[0];

  return <Quote quote={quote} />;
};

export default QuoteContainer;
