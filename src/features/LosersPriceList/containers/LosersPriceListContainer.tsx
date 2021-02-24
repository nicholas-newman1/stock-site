import React from 'react';
import { dummyLosersData } from '../../../app/dummyData';
import PriceList from '../../../common/components/PriceList';
import useFetch from '../../../common/hooks/useFetch';
import { formatMarketQuotes } from '../../../common/utils/helpers';

const LosersPriceListContainer = () => {
  const { data, loading } = useFetch(
    [], // initial value
    'losers', // endpoint
    dummyLosersData // dummy data
  );

  return (
    <PriceList
      quotes={formatMarketQuotes(data)}
      link={{ to: '', label: 'Losers' }}
      loading={loading}
    />
  );
};

export default LosersPriceListContainer;
