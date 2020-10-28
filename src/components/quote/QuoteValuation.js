import React, { useEffect, useState, useContext } from 'react';
import QuoteValuationNav from './QuoteValuationNav';
import QuoteTableHead from './financials/QuoteTableHead';
import QuoteTableRow from './financials/QuoteTableRow';
import {
  dummyAnnualValuationData,
  dummyQuarterlyValuationData,
  dummyTTMValuationData,
} from '../dummyData';
import { RealDataContext } from '../../context/RealDataContext';
import { formatData } from '../helpers';

const QuoteValuation = ({ symbol }) => {
  const { realData } = useContext(RealDataContext);
  const [valuationData, setValuationData] = useState([]);
  const [period, setPeriod] = useState('');

  const fetchValuationData = async () => {
    let res, data, ttmRes, ttmData;
    if (realData) {
      // fetch interval data
      res = await fetch(
        `https://financialmodelingprep.com/api/v3/key-metrics/${symbol}?period=${period}&apikey=${process.env.REACT_APP_FMP_KEY}`
      );
      data = await res.json();

      //fetch TTM data
      ttmRes = await fetch(
        `https://financialmodelingprep.com/api/v3/key-metrics-ttm/${symbol}?apikey=${process.env.REACT_APP_FMP_KEY}`
      );
      ttmData = await ttmRes.json();
    } else {
      if (period === '') data = [...dummyAnnualValuationData];
      if (period === 'quarter') data = [...dummyQuarterlyValuationData];
      ttmData = [...dummyTTMValuationData];
    }

    // alter how date is displayed depending on period
    if (period === 'quarter') {
      data = data.map((item) => {
        let date = new Date(item.date);
        date = date.toLocaleDateString(undefined, {
          month: 'numeric',
          year: 'numeric',
        });
        return {
          ...item,
          date,
        };
      });
    } else {
      data = data.map((item) => {
        return {
          ...item,
          date: new Date(item.date).getFullYear().toString(),
        };
      });
    }

    // format ttmData
    let newTTMData = {};
    // remove 'TTM' from keys
    for (let key in ttmData[0]) {
      newTTMData[key.replace('TTM', '')] = ttmData[0][key];
    }
    newTTMData.date = 'TTM'; // add a date property with 'TTM'

    data.unshift(newTTMData); // append TTM data to beginning of data array
    data = data.map((item) => {
      item.earningsYield = item.earningsYield * 100;
      return formatData(item);
    });

    setValuationData(data); // store data in stae
  };

  useEffect(() => {
    fetchValuationData();
    //eslint-disable-next-line
  }, [period, realData]);

  if (valuationData.length === 0) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <QuoteValuationNav setPeriod={setPeriod} />
        <table className='quote-table'>
          <QuoteTableHead tableData={valuationData} />
          <tbody className='quote-tbody'>
            <QuoteTableRow
              label={'Earnings/Share'}
              objectKey={'netIncomePerShare'}
              tableData={valuationData}
            />
            <QuoteTableRow
              label={'Book Value/Share'}
              objectKey={'bookValuePerShare'}
              tableData={valuationData}
            />
            <QuoteTableRow
              label={'Price/Sales'}
              objectKey={'priceToSalesRatio'}
              tableData={valuationData}
            />
            <QuoteTableRow
              label={'Price/Earnings'}
              objectKey={'peRatio'}
              tableData={valuationData}
            />
            <QuoteTableRow
              label={'Price/Book'}
              objectKey={'pbRatio'}
              tableData={valuationData}
            />
            <QuoteTableRow
              label={'Price/FCF'}
              objectKey={'pfcfRatio'}
              tableData={valuationData}
            />
            <QuoteTableRow
              label={'Price/OCF'}
              objectKey={'pocfratio'}
              tableData={valuationData}
            />
            <QuoteTableRow
              label={'Earnings Yield (%)'}
              objectKey={'earningsYield'}
              tableData={valuationData}
            />
            <QuoteTableRow
              label={'Enterprise Value'}
              objectKey={'enterpriseValue'}
              tableData={valuationData}
            />
            <QuoteTableRow
              label={'Enterprise Value/EBITDA'}
              objectKey={'enterpriseValueOverEBITDA'}
              tableData={valuationData}
            />
            <QuoteTableRow
              label={'ROE'}
              objectKey={'roe'}
              tableData={valuationData}
            />
            <QuoteTableRow
              label={'FCF/Share'}
              objectKey={'freeCashFlowPerShare'}
              tableData={valuationData}
            />
            <QuoteTableRow
              label={'Debt/Equity'}
              objectKey={'debtToEquity'}
              tableData={valuationData}
            />
          </tbody>
        </table>
      </>
    );
  }
};

export default QuoteValuation;
