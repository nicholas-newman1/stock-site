import React, { useState, useEffect, useContext } from 'react';
import { APIKeyContext } from '../../context/APIKeyContext';

const StockList = ({ stockData }) => {
  return (
    <ul>
      {stockData.map(({ symbol, close, percentChange }) => (
        <li key={symbol}>
          <p>Symbol: {symbol}</p>
          <p>Close: {close}</p>
          <p>Percent Change: {percentChange}</p>
        </li>
      ))}
    </ul>
  );
};

export default StockList;
