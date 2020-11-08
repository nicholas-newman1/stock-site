import React, { useEffect, useContext, useState } from 'react';
import TableNav from './TableNav';
import Table from './Table';
import TableOptions from './TableOptions';
import BottomNews from '../bottomNews/BottomNews';
import { TableContext } from '../../../context/TableContext';
import Spinner from '../Spinner';
import '../../../css/global/tablePage/tablePage.css';
import { Helmet } from 'react-helmet-async';

const TablePage = () => {
  const path = window.location.pathname.replace('/', '');
  const { initializeTable, tableData, loading } = useContext(TableContext);
  const [title, setTitle] = useState('');

  useEffect(() => {
    let sortProperty;
    let reverse;
    if (path === 'cryptocurrencies') {
      sortProperty = 'marketCap';
      reverse = false;
      setTitle('Cryptocurrency Quotes');
    } else if (path === 'forex') {
      sortProperty = 'name';
      reverse = true;
      setTitle('Forex Quotes');
    } else if (path === 'commodities') {
      sortProperty = 'name';
      reverse = true;
      setTitle('Commodity Quotes');
    }
    initializeTable(path, sortProperty, reverse);
    //eslint-disable-next-line
  }, [path]);

  return (
    <>
      <Helmet>
        <title>{title} | Finance App</title>
        <meta
          name='description'
          content={`Free ${title}. Find free stock quotes, forex exchange rates, cryptocurrency rates, and more.`}
        />
      </Helmet>
      {loading ? (
        <Spinner />
      ) : tableData.length > 0 ? (
        <div>
          <h1 className='table-heading'>{path}</h1>
          <TableNav />
          <Table />
          <TableOptions />
          <BottomNews />
        </div>
      ) : (
        <h2 className='table-no-data'>No Data Available</h2>
      )}
    </>
  );
};

export default TablePage;
