import React from 'react';
import { Quote } from '../../../types/APITypes';
import './quoteSummary.css';

interface Props {
  quote: Quote;
}

const QuoteDetails: React.FC<Props> = ({ quote }) => {
  return (
    <div className='quote-summary'>
      <table className='quote-summary__table'>
        <thead className='quote-summary__thead'>
          <tr className='quote-summary__tr'>
            <th className='quote-summary__th'>Previous Close</th>
            <th className='quote-summary__th'>Open</th>
            <th className='quote-summary__th'>Day High</th>
            <th className='quote-summary__th'>Day Low</th>
            <th className='quote-summary__th'>Year High</th>
            <th className='quote-summary__th'>Year Low</th>
          </tr>
        </thead>
        <tbody className='quote-summary__tbody'>
          <tr className='quote-summary__tr'>
            <td className='quote-summary__td'>{quote.previousClose}</td>
            <td className='quote-summary__td'>{quote.open}</td>
            <td className='quote-summary__td'>{quote.dayHigh}</td>
            <td className='quote-summary__td'>{quote.dayLow}</td>
            <td className='quote-summary__td'>{quote.yearHigh}</td>
            <td className='quote-summary__td'>{quote.yearLow}</td>
          </tr>
        </tbody>
      </table>

      <table className='quote-summary__table'>
        <thead className='quote-summary__thead'>
          <tr className='quote-summary__tr'>
            <th className='quote-summary__th'>Market Cap</th>
            <th className='quote-summary__th'>PE</th>
            <th className='quote-summary__th'>EPS</th>
            <th className='quote-summary__th'>Shares Outstanding</th>
            <th className='quote-summary__th'>Volume</th>
            <th className='quote-summary__th'>Average Volume</th>
          </tr>
        </thead>
        <tbody className='quote-summary__tbody'>
          <tr className='quote-summary__tr'>
            <td className='quote-summary__td'>{quote.marketCap}</td>
            <td className='quote-summary__td'>{quote.pe}</td>
            <td className='quote-summary__td'>{quote.eps}</td>
            <td className='quote-summary__td'>{quote.sharesOutstanding}</td>
            <td className='quote-summary__td'>{quote.volume}</td>
            <td className='quote-summary__td'>{quote.avgVolume}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default QuoteDetails;
