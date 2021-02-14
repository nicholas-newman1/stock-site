import React from 'react';
import TableSortedPaginated from '../../components/TableSortedPaginated';
import useFetch from '../../hooks/useFetch';
import { dummyCryptoData } from '../../utils/dummyData';
import { formatData, properties } from '../../utils/quoteTable';

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
