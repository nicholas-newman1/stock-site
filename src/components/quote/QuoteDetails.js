import React, { useContext } from 'react';
import { QuoteContext } from '../../context/QuoteContext';
import '../../css/quote/quoteDetails.css';

const QuoteDetails = () => {
  const { quote } = useContext(QuoteContext);

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
            <td className='quote-td'>{quote.previousClose}</td>
            <td className='quote-td'>{quote.open}</td>
            <td className='quote-td'>{quote.dayHigh}</td>
            <td className='quote-td'>{quote.dayLow}</td>
            <td className='quote-td'>{quote.yearHigh}</td>
            <td className='quote-td'>{quote.yearLow}</td>
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
            <td className='quote-td'>{quote.marketCap}</td>
            <td className='quote-td'>{quote.pe}</td>
            <td className='quote-td'>{quote.eps}</td>
            <td className='quote-td'>{quote.sharesOutstanding}</td>
            <td className='quote-td'>{quote.volume}</td>
            <td className='quote-td'>{quote.avgVolume}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default QuoteDetails;
