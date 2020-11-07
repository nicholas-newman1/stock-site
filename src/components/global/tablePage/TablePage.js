import React, { useEffect, useContext } from 'react';
import TableNav from './TableNav';
import Table from './Table';
import TableOptions from './TableOptions';
import BottomNews from '../bottomNews/BottomNews';
import { TableContext } from '../../../context/TableContext';
import Spinner from '../Spinner';
import '../../../css/global/tablePage/tablePage.css';

const TablePage = () => {
  const path = window.location.pathname.replace('/', '');
  const { initializeTable, tableData, loading } = useContext(TableContext);

  useEffect(() => {
    let sortProperty;
    let reverse;
    if (path === 'cryptocurrencies') {
      sortProperty = 'marketCap';
      reverse = false;
    } else if (path === 'forex') {
      sortProperty = 'name';
      reverse = true;
    } else if (path === 'commodities') {
      sortProperty = 'name';
      reverse = true;
    }
    initializeTable(path, sortProperty, reverse);
    //eslint-disable-next-line
  }, [path]);

  return loading ? (
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
  );
};

export default TablePage;
