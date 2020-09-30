import React, { useState, useEffect, useContext } from 'react';
import CryptoItem from './CryptoItem';
import { APIKeyContext } from '../../context/APIKeyContext';
import { dummyCryptoData } from './dummyData';

const CryptoList = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const { cmcKey } = useContext(APIKeyContext);

  const fetchCryptoQuotes = async currencies => {
    // const res = await fetch(
    //   `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?convert=CAD&symbol=${currencies.join()}&CMC_PRO_API_KEY=${cmcKey}`
    // );
    // const data = await res.json(); // The API returns an object of objects
    const data = dummyCryptoData;
    for (let key in data.data) {
      // Convert object into an array
      setCryptoData(prevData => [...prevData, data.data[key]]);
    }
  };

  useEffect(() => {
    fetchCryptoQuotes(['BTC', 'ETH', 'XRP', 'USDT']);
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
        {cryptoData.map(
          ({
            id,
            symbol,
            quote: {
              CAD: { price, percent_change_24h },
            },
          }) => (
            <CryptoItem
              key={id}
              data={{ symbol, price, percentChange: percent_change_24h }}
            />
          )
        )}
      </tbody>
    </table>
  );
};

export default CryptoList;
