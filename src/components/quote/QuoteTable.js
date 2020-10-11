import React, { useEffect, useState } from 'react';
import '../../css/quote/quoteTable.css';

const QuoteTable = ({ data }) => {
  const [formatted, setFormatted] = useState({});

  useEffect(() => {
    // loop through each key in the data object and format numbers to make them more readable
    for (let key in data) {
      let formattedValue;
      // divide by either a trillion, billion, or million, and add the respective letter
      // toFixed to cut off number of decimals
      // parseFloat to remove any trailing 0's that toFixed might add
      if (data[key] >= 1000000000000 || data[key] <= -1000000000000) {
        formattedValue = `${parseFloat(
          (data[key] / 1000000000000).toFixed(2)
        )}T`;
      } else if (data[key] >= 1000000000 || data[key] <= -1000000000) {
        formattedValue = `${parseFloat((data[key] / 1000000000).toFixed(2))}B`;
      } else if (data[key] >= 1000000 || data[key] <= -1000000) {
        formattedValue = `${parseFloat((data[key] / 1000000).toFixed(2))}M`;
      } else if (typeof data[key] === 'number') {
        // add commas and remove unnecessary decimals from numbers between 1 and -1 million
        formattedValue = Number(data[key]).toFixed(2).toLocaleString();
      } else {
        // if value is not a number, return it unaltered
        formattedValue = data[key];
      }
      setFormatted((prevData) => {
        return {
          ...prevData,
          [key]: formattedValue,
        };
      });
    }
  }, [data]);

  return (
    <div className='quote-table-container'>
      <table className='quote-table'>
        <thead className='quote-thead'>
          <tr className='quote-tr'>
            <th className='quote-th'>Previous Close</th>
            <th className='quote-th'>Open</th>
            <th className='quote-th'>Day High</th>
            <th className='quote-th'>Day Low</th>
            <th className='quote-th'>Year High</th>
            <th className='quote-th'>Year Low</th>
          </tr>
        </thead>
        <tbody className='quote-tbody'>
          <tr className='quote-tr'>
            <td className='quote-td'>{formatted.previousClose}</td>
            <td className='quote-td'>{formatted.open}</td>
            <td className='quote-td'>{formatted.dayHigh}</td>
            <td className='quote-td'>{formatted.dayLow}</td>
            <td className='quote-td'>{formatted.yearHigh}</td>
            <td className='quote-td'>{formatted.yearLow}</td>
          </tr>
        </tbody>
      </table>

      <table className='quote-table'>
        <thead className='quote-thead'>
          <tr className='quote-tr'>
            <th className='quote-th'>Market Cap</th>
            <th className='quote-th'>PE</th>
            <th className='quote-th'>EPS</th>
            <th className='quote-th'>Shares Outstanding</th>
            <th className='quote-th'>Volume</th>
            <th className='quote-th'>Average Volume</th>
          </tr>
        </thead>
        <tbody className='quote-tbody'>
          <tr className='quote-tr'>
            <td className='quote-td'>{formatted.marketCap}</td>
            <td className='quote-td'>{formatted.pe}</td>
            <td className='quote-td'>{formatted.eps}</td>
            <td className='quote-td'>{formatted.sharesOutstanding}</td>
            <td className='quote-td'>{formatted.volume}</td>
            <td className='quote-td'>{formatted.avgVolume}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default QuoteTable;
