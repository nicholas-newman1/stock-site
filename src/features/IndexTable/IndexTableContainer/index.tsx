import React from 'react';
import TableSortedPaginated from '../../../common/components/TableSortedPaginated';
import useFetch from '../../../common/hooks/useFetch';
import { dummyIndexPageData } from '../../../app/dummyData';
import { formatData, properties } from '../../../common/utils/quoteTable';

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
