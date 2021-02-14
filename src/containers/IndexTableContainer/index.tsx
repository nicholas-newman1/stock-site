import React from 'react';
import TableSortedPaginated from '../../components/TableSortedPaginated';
import useFetch from '../../hooks/useFetch';
import { dummyIndexPageData } from '../../utils/dummyData';
import { formatData, properties } from '../../utils/quoteTable';

const IndexTableContainer = () => {
  const { data, loading } = useFetch(
    [], // intial value
    'quotes/index', // endpoint
    dummyIndexPageData // dummy data
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

export default IndexTableContainer;
