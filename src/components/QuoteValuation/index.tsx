import React from 'react';
import BtnBarOne from '../BtnBarOne';
import Table from '../Table';
import './quoteValuation.css';

interface Props {
  tableData: any[][];
  loading: boolean;
  setPeriod: React.Dispatch<React.SetStateAction<Period>>;
}

const QuoteValuation: React.FC<Props> = ({ tableData, loading, setPeriod }) => {
  return (
    <div className='quote-valuation'>
      <BtnBarOne
        btns={[
          { text: 'Annually', value: 'annual' },
          { text: 'Quarterly', value: 'quarter' },
        ]}
        setState={setPeriod}
      />

      <Table data={tableData} loading={loading} horizontal={true} />
    </div>
  );
};

export default QuoteValuation;
