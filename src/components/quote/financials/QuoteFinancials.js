import React, { useState, useEffect, useContext } from 'react';
import IncomeStatement from './IncomeStatement';
import BalanceSheet from './BalanceSheet';
import CashFlow from './CashFlow';
import QuoteFinancialsNav from './QuoteFinancialsNav';
import Spinner from '../../Spinner';
import { shortenNumber } from '../../helpers';
import {
  dummyAnnualIncomeStatement,
  dummyQuarterlyIncomeStatement,
  dummyAnnualBalanceSheet,
  dummyQuarterlyBalanceSheet,
  dummyAnnualCashFlow,
  dummyQuarterlyCashFlow,
} from '../../dummyData';
import { RealDataContext } from '../../../context/RealDataContext';
import '../../../css/quote/quoteFinancials.css';

const QuoteFinancials = ({ symbol }) => {
  const [loading, setLoading] = useState(false);
  const [statement, setStatement] = useState('income-statement');
  const [period, setPeriod] = useState('');
  const [statementData, setStatementData] = useState([]);
  const { realData } = useContext(RealDataContext);
  const [dataAvailable, setDataAvailable] = useState(true);

  const fetchStatement = async () => {
    let data;
    if (realData) {
      setLoading(true);
      const res = await fetch(
        `https://financialmodelingprep.com/api/v3/${statement}/${symbol}?period=${period}&limit=400&apikey=${process.env.REACT_APP_FMP_KEY}`
      );
      data = await res.json();
      data.length > 0 ? setDataAvailable(true) : setDataAvailable(false);
      setLoading(false);
    } else {
      if (statement === 'income-statement') {
        period
          ? (data = [...dummyQuarterlyIncomeStatement])
          : (data = [...dummyAnnualIncomeStatement]);
      } else if (statement === 'balance-sheet-statement') {
        period
          ? (data = [...dummyQuarterlyBalanceSheet])
          : (data = [...dummyAnnualBalanceSheet]);
      } else if (statement === 'cash-flow-statement') {
        period
          ? (data = [...dummyQuarterlyCashFlow])
          : (data = [...dummyAnnualCashFlow]);
      }
    }

    data = data.map((item) => {
      let formatted = Object.assign({}, item);
      if (statement === 'balance-sheet-statement') {
        formatted.totalCapitalization =
          item.longTermDebt + item.totalStockholdersEquity;
        formatted.bookValue =
          item.totalStockholdersEquity - item.goodwillAndIntangibleAssets;
      }

      for (let key in formatted) {
        formatted[key] = formatted[key] === null ? 'N/A' : formatted[key];
        formatted[key] = shortenNumber(formatted[key]);
      }
      return formatted;
    });

    setStatementData(data);
  };

  useEffect(() => {
    fetchStatement();
    //eslint-disable-next-line
  }, [statement, period, realData]);

  return (
    // have a download option for each financial statement
    // conditionally render financials based on: https://financialmodelingprep.com/api/v3/financial-statement-symbol-lists?apikey=demo
    // the above link will return all symbols that have financial statements
    <div>
      <QuoteFinancialsNav setStatement={setStatement} setPeriod={setPeriod} />
      {loading ? (
        <Spinner />
      ) : dataAvailable ? (
        <div>
          {statement === 'income-statement' && (
            <IncomeStatement statementData={statementData} />
          )}
          {statement === 'balance-sheet-statement' && (
            <BalanceSheet statementData={statementData} />
          )}
          {statement === 'cash-flow-statement' && (
            <CashFlow statementData={statementData} />
          )}
        </div>
      ) : (
        <h3>No Data Available</h3>
      )}
    </div>
  );
};

export default QuoteFinancials;
