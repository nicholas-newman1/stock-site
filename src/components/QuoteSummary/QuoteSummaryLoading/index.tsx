import React from 'react';

const QuoteSummaryLoading = () => {
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
            <td className='quote-summary__td'></td>
            <td className='quote-summary__td'></td>
            <td className='quote-summary__td'></td>
            <td className='quote-summary__td'></td>
            <td className='quote-summary__td'></td>
            <td className='quote-summary__td'></td>
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
            <td className='quote-summary__td'></td>
            <td className='quote-summary__td'></td>
            <td className='quote-summary__td'></td>
            <td className='quote-summary__td'></td>
            <td className='quote-summary__td'></td>
            <td className='quote-summary__td'></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default QuoteSummaryLoading;
