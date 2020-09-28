import React, { useState, useEffect, useContext } from 'react';
import { APIKeyContext } from '../../context/APIKeyContext';

const ForexList = () => {
  return (
    <ul>
      <li>
        <p>Symbol</p>
        <p>Close</p>
        <p>Percent Changes</p>
      </li>
    </ul>
  );
};

export default ForexList;
