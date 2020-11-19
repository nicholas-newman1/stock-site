import React, { useState, useEffect, useContext } from 'react';
import LoadingPriceList from './LoadingPriceList';
import PriceRow from './PriceRow';
import { dummyIndexData } from '../../../../dummyData';
import { RealDataContext } from '../../../../context/RealDataContext';
import './priceTable.css';

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
              <PriceRow key={quote.symbol} data={quote} />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PriceList;
