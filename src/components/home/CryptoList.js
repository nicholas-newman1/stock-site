import React, { useState, useEffect } from 'react';
import PriceListItem from './PriceListItem';
//import { APIKeyContext } from '../../context/APIKeyContext';
//import { dummyCryptoData } from './dummyData';

const CryptoList = () => {
  const [cryptoData, setCryptoData] = useState([]);
  //const { cmcKey } = useContext(APIKeyContext);

  const getChange = (price, percentChange) => {
    if (percentChange < 0) {
      return (price * ((percentChange - 100) / 100) + price).toFixed(2);
    } else if (percentChange > 0) {
      return (price * ((percentChange + 100) / 100) - price).toFixed(2);
    } else {
      return 0;
    }
  };

  const fetchCryptoQuotes = async (currencies) => {
    const res = await fetch(
      //`https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?convert=CAD&symbol=${currencies.join()}&CMC_PRO_API_KEY=${cmcKey}`
      `https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?convert=CAD&symbol=BTC,ETH,XRP&CMC_PRO_API_KEY=${process.env.REACT_APP_CMC_KEY}`
    );
    const data = await res.json(); // The API returns an object of objects
    //const data = dummyCryptoData;
    for (let key in data.data) {
      // Convert object into an array
      setCryptoData((prevData) => {
        const price = data.data[key].quote['CAD'].price;
        const percentChange = data.data[key].quote['CAD'].percent_change_24h;
        const change = getChange(price, percentChange);
        return [
          ...prevData,
          {
            id: data.data[key].id,
            symbol: data.data[key].symbol,
            price: price.toFixed(2),
            change,
            percentChange: percentChange.toFixed(2),
            color: change > 0 ? 'green' : 'red',
            isPositive: change > 0,
            category: 'cryptocurrencies',
          },
        ];
      });
    }
  };

  useEffect(() => {
    fetchCryptoQuotes(['BTC', 'ETH', 'XRP', 'USDT']);
    // eslint-disable-next-line
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
        {cryptoData.map((currency) => (
          <PriceListItem key={currency.id} data={currency} />
        ))}
      </tbody>
    </table>
  );
};

export default CryptoList;
