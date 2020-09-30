import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { APIKeyContext } from '../../context/APIKeyContext';
import { dummyForexData } from './dummyData';

const ForexList = () => {
  const [forexData, setForexData] = useState([]);
  const { fcsKey } = useContext(APIKeyContext);

  const fetchForexPrices = async (pairs) => {
    //const res = await fetch(`https://fcsapi.com/api-v2/forex/latest?symbol=${pairs.join}&access_key=${fcsKey}`);
    //const data = await res.json();
    const data = dummyForexData.response;
    setForexData(data);
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
        {forexData.map(({ id, symbol, price, change, chg_per }) => (
          <tr key={symbol}>
            <td>
              <Link
                className='symbol-link'
                to={`/forex/${symbol.replace('/', '')}`}
              >
                {symbol}
              </Link>
            </td>
            <td>${price}</td>
            <td style={change < 0 ? { color: 'red' } : { color: 'green' }}>
              {change}
            </td>
            <td
              style={
                parseFloat(chg_per) < 0 ? { color: 'red' } : { color: 'green' }
              }
            >
              {chg_per}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ForexList;
