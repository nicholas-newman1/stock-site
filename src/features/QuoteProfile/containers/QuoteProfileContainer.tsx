import React from 'react';
import QuoteProfile from '../components/QuoteProfile';
import useFetch from '../../../common/hooks/useFetch';
import { dummyProfileData } from '../../../app/dummyData';

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
