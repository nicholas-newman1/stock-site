import React, { useState, useEffect } from 'react';
import LoadingPriceList from './LoadingPriceList';
import PriceListItem from './PriceListItem';
import { Link } from 'react-router-dom';
import { dummyIndexData } from '../../dummyData';

const PriceList = ({ heading, symbols }) => {
  const [quoteData, setQuoteData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchQuotes = async () => {
    setLoading(true);
    // const res = await fetch(
    //   `https://financialmodelingprep.com/api/v3/quote/${symbols.join()}?apikey=${
    //     process.env.REACT_APP_FMP_KEY
    //   }`
    // );
    // const data = await res.json();

    const data = dummyIndexData;
    data.forEach(({ symbol, price, change, changesPercentage }) => {
      setQuoteData((prevData) => [
        ...prevData,
        {
          symbol,
          price: -1 < price && price < 1 ? price.toFixed(4) : price.toFixed(2),
          change:
            -1 < change && change < 1 ? change.toFixed(4) : change.toFixed(2),
          percentChange: changesPercentage,
          color: change > 0 ? 'green' : 'red',
          isPositive: change > 0,
        },
      ]);
    });
    setLoading(false);
  };

  useEffect(() => {
    fetchQuotes();
    //eslint-disable-next-line
  }, []);

  return (
    <li className='pricelist-item'>
      <h2 className='pricelist-heading'>
        <Link className='pricelist-link' to={`/${heading.toLowerCase()}`}>
          {heading}
        </Link>
      </h2>

      <table className='pricelist-table'>
        <thead className='pricelist-thead'>
          <tr className='pricelist-tr'>
            <th className='pricelist-th'>Symbol</th>
            <th className='pricelist-th'>Price</th>
            <th className='pricelist-th'>Change</th>
            <th className='pricelist-th'>Percent Change</th>
          </tr>
        </thead>

        <tbody className='pricelist-tbody'>
          {loading ? (
            <LoadingPriceList />
          ) : (
            quoteData.map((quote) => (
              <PriceListItem key={quote.symbol} data={quote} />
            ))
          )}
        </tbody>
      </table>
    </li>
  );
};

export default PriceList;
