import React from 'react';
import { dummyActivesData } from '../../../app/dummyData';
import PriceList from '../../../common/components/PriceList';
import useFetch from '../../../common/hooks/useFetch';
import { formatMarketQuotes } from '../../../common/utils/helpers';

const ActivesPriceListContainer = () => {
  const { data, loading } = useFetch(
    [], // initial value
    'actives', // endpoint
    dummyActivesData // dummy data
  );

  return (
    <PriceList
      quotes={formatMarketQuotes(data)}
      link={{ to: '', label: 'Actives' }}
      loading={loading}
    />
  );
};

export default ActivesPriceListContainer;
