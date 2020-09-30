import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { APIKeyContext } from '../../context/APIKeyContext';
import { dummyCryptoData } from './dummyData';

const CryptoList = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const { cmcKey } = useContext(APIKeyContext);

  const fetchCryptoQuotes = async (currencies) => {
    // const res = await fetch(
    //   `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?convert=CAD&symbol=${currencies.join()}&CMC_PRO_API_KEY=${cmcKey}`
    // );
    // const data = await res.json(); // The API returns an object of objects
    const data = dummyCryptoData;
    for (let key in data.data) {
      // Convert object into an array
      setCryptoData((prevData) => [...prevData, data.data[key]]);
    }
  };

  const getChange = (price, percentChange) => {
    return (
      price -
      price /
        (percentChange > 0 ? percentChange + 100 : percentChange - 100) /
        100
    );
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
            <tr key={id}>
              <td>
                <Link
                  className='symbol-link'
                  to={`/cryptocurrencies/${symbol}`}
                >
                  {symbol}
                </Link>
              </td>
              <td>${price.toFixed(2)}</td>
              <td>{getChange(price, percent_change_24h)}</td>
              <td
                style={
                  percent_change_24h < 0 ? { color: 'red' } : { color: 'green' }
                }
              >
                {percent_change_24h.toFixed(2)}%
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};

export default CryptoList;
