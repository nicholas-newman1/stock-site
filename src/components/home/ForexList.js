import React, { useState, useEffect } from 'react';
import { dummyForexData } from './dummyData';
import LoadingPriceList from './LoadingPriceList';
import PriceListItem from './PriceListItem';

const ForexList = () => {
  const [forexData, setForexData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchForexPrices = async (pairs) => {
    // setLoading(true);
    // const res = await fetch(
    //   `https://fcsapi.com/api-v2/forex/latest?symbol=${pairs.join()}&access_key=${
    //     process.env.REACT_APP_FCS_KEY
    //   }`
    // );
    // const data = await res.json();
    setLoading(false);
    dummyForexData.response.forEach((pair) => {
      setForexData((prevData) => [
        ...prevData,
        {
          id: pair.id,
          symbol: pair.symbol,
          price: pair.price,
          change: parseFloat(pair.change),
          percentChange: parseFloat(pair.chg_per),
          color: pair.change > 0 ? 'green' : 'red',
          isPositive: pair.change > 0,
          category: 'forex',
        },
      ]);
    });
  };

  useEffect(() => {
    fetchForexPrices(['CAD/USD', 'CAD/EUR', 'CAD/GBP', 'CAD/JPY']);
  }, []);

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
          forexData.map((pair) => <PriceListItem key={pair.id} data={pair} />)
        )}
      </tbody>
    </table>
  );
};

export default ForexList;
