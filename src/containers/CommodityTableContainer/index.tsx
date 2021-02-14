import React from 'react';
import TableSortedPaginated from '../../components/TableSortedPaginated';
import useFetch from '../../hooks/useFetch';
import { dummyCommodityData } from '../../utils/dummyData';
import { formatData, properties } from '../../utils/quoteTable';

const CommodityTableContainer = () => {
  const { data, loading } = useFetch(
    [], // intial value
    'quotes/commodity', // endpoint
    dummyCommodityData // dummy data
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

export default CommodityTableContainer;
