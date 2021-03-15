import React from 'react';
import BtnBarOne from '../../../../common/components/BtnBarOne';
import Spinner from '../../../../common/components/Spinner';
import Table from '../../../../common/components/Table';
import './quoteFinancials.css';

interface Props {
  tableData: any[][];
  setStatement: React.Dispatch<React.SetStateAction<Statement>>;
  setPeriod: React.Dispatch<React.SetStateAction<Period>>;
  loading: boolean;
}

const QuoteFinancials: React.FC<Props> = ({
  tableData,
  setStatement,
  setPeriod,
  loading,
}) => {
  return (
    <div className='quote-financials'>
      <div className='quote-financials__nav'>
        <BtnBarOne
          btns={[
            { text: 'Income Statement', value: 'income-statement' },
            { text: 'Balance Sheet', value: 'balance-sheet-statement' },
            { text: 'Cash Flow', value: 'cash-flow-statement' },
          ]}
          setState={setStatement}
        />
        <BtnBarOne
          btns={[
            { text: 'Annually', value: 'annual' },
            { text: 'Quarterly', value: 'quarter' },
          ]}
          setState={setPeriod}
        />
      </div>

      {loading ? <Spinner /> : <Table data={tableData} horizontal={true} />}
    </div>
  );
};

export default QuoteFinancials;
