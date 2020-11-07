import React, { useState, useEffect, useContext } from 'react';
import LoadingPriceList from './LoadingPriceList';
import PriceListItem from './PriceListItem';
import { Link } from 'react-router-dom';
import { dummyIndexData } from '../../../dummyData';
import { RealDataContext } from '../../../context/RealDataContext';

const PriceList = ({ heading, symbols }) => {
  const [quoteData, setQuoteData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { realData } = useContext(RealDataContext);

  const fetchQuotes = async () => {
    setLoading(true);
    let data;
    if (realData) {
      const res = await fetch(
        `https://financialmodelingprep.com/api/v3/quote/${symbols.join()}?apikey=${
          process.env.REACT_APP_FMP_KEY
        }`
      );
      data = await res.json();
    } else {
      data = [...dummyIndexData];
    }

    setQuoteData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchQuotes();
    //eslint-disable-next-line
  }, [realData]);

  return (
    <li className='pricelist-item'>
      <h2 className='pricelist-heading'>
        <Link className='pricelist-link' to={`/${heading.toLowerCase()}`}>
          {heading}
        </Link>
      </h2>

      <div className='pricelist-table-container'>
        <table className='pricelist-table'>
          <thead className='pricelist-thead'>
            <tr className='pricelist-tr'>
              <th className='pricelist-th'>Symbol</th>
              <th className='pricelist-th'>Price</th>
              <th className='pricelist-th'>Change ($)</th>
              <th className='pricelist-th'>Change (%)</th>
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
      </div>
    </li>
  );
};

export default PriceList;
