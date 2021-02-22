import React from 'react';
import TableSortedPaginated from '../../../common/components/TableSortedPaginated';
import useFetch from '../../../common/hooks/useFetch';
import { dummyCommodityData } from '../../../app/dummyData';
import { formatData, properties } from '../../../common/utils/quoteTable';

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
