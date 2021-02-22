import React from 'react';
import TableSortedPaginated from '../../../common/components/TableSortedPaginated';
import useFetch from '../../../common/hooks/useFetch';
import { dummyCryptoData } from '../../../app/dummyData';
import { formatData, properties } from '../../../common/utils/quoteTable';

const CryptoTableContainer = () => {
  const { data, loading } = useFetch(
    [], // intial value
    'quotes/crypto', // endpoint
    dummyCryptoData // dummy data
  );

  return (
    <TableSortedPaginated
      data={data}
      formatData={formatData}
      loading={loading}
      properties={properties}
      initialSortProperty='name'
    />
  );
};

export default CryptoTableContainer;
