import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Table from '../../components/Table/Table';
import BottomNews from '../../components/smart/BottomNews';
import Heading from '../../components/dumb/Heading';
import {
  dummyIndexPageData,
  dummyQuarterlyIncomeStatement,
} from '../../dummyData';
import useFetch from '../../hooks/useFetch';
import useScrollTop from '../../hooks/useScrollTop';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../../actions/newsActions';
import { AppState } from '../../reducers/rootReducer';
import TableOne from '../../components/dumb/TableOne';
import { formatStatementData, pluck, pluckAll } from '../../helpers';

const IndexPage: React.FC = () => {
  useScrollTop(); // scrolls to top of page on component mount

  const { data, setData, loading } = useFetch(
    [], // intial value
    'quotes/index', // endpoint
    dummyIndexPageData // dummy data
  );

  const dispatch = useDispatch();

  const { data: newsData, loading: loadingNews } = useSelector(
    (state: AppState) => state.news
  );

  const incomeStatementHeadings = [
    { label: 'Revenue', property: 'revenue' },
    { label: 'Cost of Revenue', property: 'costOfRevenue' },
    { label: 'Gross Profit', property: 'grossProfit' },
    { label: 'Operating Expense', property: 'operatingExpenses' },
    { label: 'Operating Income', property: 'operatingIncome' },
    { label: 'Interest Expense', property: 'interestExpense' },
    { label: 'Other Income Expense', property: 'totalOtherIncomeExpensesNet' },
    { label: 'Pretax Income', property: 'incomeBeforeTax' },
    { label: 'Income Tax Expense', property: 'incomeTaxExpense' },
    { label: 'Net Income', property: 'netIncome' },
    { label: 'EPS', property: 'eps' },
    { label: 'Diluted EPS', property: 'epsdiluted' },
    { label: 'Diluted Average Shares', property: 'weightedAverageShsOutDil' },
    { label: 'Total Expenses', property: 'costAndExpenses' },
    { label: 'EBITDA', property: 'ebitda' },
    { label: 'Depreciation', property: 'depreciationAndAmortization' },
  ];

  const dummyData = pluckAll(
    formatStatementData(dummyQuarterlyIncomeStatement),
    pluck(incomeStatementHeadings, 'property')
  );

  const headHeadings = pluck(dummyQuarterlyIncomeStatement, 'date');

  const rowHeadings = pluck(incomeStatementHeadings, 'label');

  console.log({ dummyData, rowHeadings, headHeadings });

  useEffect(() => {
    dispatch(fetchNews('limit=10'));
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <Helmet>
        <title>Index Quotes | Finance App</title>
        <meta
          name='description'
          content='Free index quotes. Find free stock quotes, forex rates, cryptocurrency prices, and more.'
        />
      </Helmet>

      <TableOne
        data={dummyData}
        rowHeadings={rowHeadings!}
        headHeadings={headHeadings!}
        loading={false}
      />

      <Heading text='Indexes' />

      <Table loading={loading} tableData={data} setTableData={setData} />
      <BottomNews newsData={newsData} loading={loadingNews} />
    </div>
  );
};

export default IndexPage;
