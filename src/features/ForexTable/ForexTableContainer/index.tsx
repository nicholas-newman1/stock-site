import React from 'react';
import TableSortedPaginated from '../../../common/components/TableSortedPaginated';
import useFetch from '../../../common/hooks/useFetch';
import { dummyForexData } from '../../../app/dummyData';
import { formatData, properties } from '../../../common/utils/quoteTable';

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
