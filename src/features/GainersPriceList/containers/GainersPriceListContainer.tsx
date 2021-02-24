import React from 'react';
import { dummyGainersData } from '../../../app/dummyData';
import PriceList from '../../../common/components/PriceList';
import useFetch from '../../../common/hooks/useFetch';
import { formatMarketQuotes } from '../../../common/utils/helpers';

const GainersPriceListContainer = () => {
  const { data, loading } = useFetch(
    [], // initial value
    'gainers', // endpoint
    dummyGainersData // dummy data
  );

  return (
    <PriceList
      quotes={formatMarketQuotes(data)}
      link={{ to: '', label: 'Gainers' }}
      loading={loading}
    />
  );
};

export default GainersPriceListContainer;
