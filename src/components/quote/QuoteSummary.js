import React, { useContext } from 'react';
import { QuoteContext } from '../../context/QuoteContext';
import '../../css/quote/quoteSummary.css';

const QuoteDetails = () => {
  const { quote } = useContext(QuoteContext);

  return (
    <div className='quote-summary-table-container'>
      <table className='quote-summary-table'>
        <thead className='quote-summary-thead'>
          <tr className='quote-summary-tr'>
            <th className='quote-summary-th'>Previous Close</th>
            <th className='quote-summary-th'>Open</th>
            <th className='quote-summary-th'>Day High</th>
            <th className='quote-summary-th'>Day Low</th>
            <th className='quote-summary-th'>Year High</th>
            <th className='quote-summary-th'>Year Low</th>
          </tr>
        </thead>
        <tbody className='quote-summary-tbody'>
          <tr className='quote-summary-tr'>
            <td className='quote-summary-td'>{quote.previousClose}</td>
            <td className='quote-summary-td'>{quote.open}</td>
            <td className='quote-summary-td'>{quote.dayHigh}</td>
            <td className='quote-summary-td'>{quote.dayLow}</td>
            <td className='quote-summary-td'>{quote.yearHigh}</td>
            <td className='quote-summary-td'>{quote.yearLow}</td>
          </tr>
        </tbody>
      </table>

      <table className='quote-summary-table'>
        <thead className='quote-summary-thead'>
          <tr className='quote-summary-tr'>
            <th className='quote-summary-th'>Market Cap</th>
            <th className='quote-summary-th'>PE</th>
            <th className='quote-summary-th'>EPS</th>
            <th className='quote-summary-th'>Shares Outstanding</th>
            <th className='quote-summary-th'>Volume</th>
            <th className='quote-summary-th'>Average Volume</th>
          </tr>
        </thead>
        <tbody className='quote-summary-tbody'>
          <tr className='quote-summary-tr'>
            <td className='quote-summary-td'>{quote.marketCap}</td>
            <td className='quote-summary-td'>{quote.pe}</td>
            <td className='quote-summary-td'>{quote.eps}</td>
            <td className='quote-summary-td'>{quote.sharesOutstanding}</td>
            <td className='quote-summary-td'>{quote.volume}</td>
            <td className='quote-summary-td'>{quote.avgVolume}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default QuoteDetails;
