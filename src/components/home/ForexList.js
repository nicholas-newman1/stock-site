import React, { useState, useEffect, useContext } from 'react';
import { APIKeyContext } from '../../context/APIKeyContext';
import { dummyForexData } from './dummyData';
import PriceListItem from './PriceListItem';

const ForexList = () => {
  const [forexData, setForexData] = useState([]);
  const { fcsKey } = useContext(APIKeyContext);

  const fetchForexPrices = async (pairs) => {
    //const res = await fetch(`https://fcsapi.com/api-v2/forex/latest?symbol=${pairs.join}&access_key=${fcsKey}`);
    //const data = await res.json();
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
        {forexData.map((pair) => (
          <PriceListItem key={pair.id} data={pair} />
        ))}
      </tbody>
    </table>
  );
};

export default ForexList;
