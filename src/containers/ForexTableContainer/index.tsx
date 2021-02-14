import React from 'react';
import TableSortedPaginated from '../../components/TableSortedPaginated';
import useFetch from '../../hooks/useFetch';
import { dummyForexData } from '../../utils/dummyData';
import { formatData, properties } from '../../utils/quoteTable';

const ForexTableContainer = () => {
  const { data, loading } = useFetch(
    [], // intial value
    'quotes/forex', // endpoint
    dummyForexData // dummy data
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

export default ForexTableContainer;
