import React, { useState, useEffect } from 'react';
import LoadingPriceList from './LoadingPriceList';
import PriceListItem from './PriceListItem';

const WatchList = () => {
  const [watchListData, setWatchListData] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <table>
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Price</th>
          <th>Change</th>
          <th>Percent Change</th>
        </tr>
      </thead>

      <tbody>
        {loading ? (
          <LoadingPriceList />
        ) : (
          watchListData.map((stock) => (
            <PriceListItem key={stock.symbol} data={stock} />
          ))
        )}
      </tbody>
    </table>
  );
};

export default WatchList;
