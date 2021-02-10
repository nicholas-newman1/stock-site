import React from 'react';
import QuoteProfile from '../../components/dumb/QuoteProfile';
import useFetch from '../../hooks/useFetch';
import { dummyProfileData } from '../../utils/dummyData';

interface Props {
  symbol: string;
}

const QuoteProfileContainer: React.FC<Props> = ({ symbol }) => {
  const { data, loading } = useFetch(
    [], // initial value
    `profile/${symbol}`, // endpoint
    dummyProfileData // dummy data
  );

  return <QuoteProfile profile={data[0]} loading={loading} />;
};

export default QuoteProfileContainer;
