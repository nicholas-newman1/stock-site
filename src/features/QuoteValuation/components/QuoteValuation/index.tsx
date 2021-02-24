import React from 'react';
import BtnBarOne from '../../../../common/components/BtnBarOne';
import Table from '../../../../common/components/Table';
import './quoteValuation.css';

interface Props {
  tableData: any[][];
  setPeriod: React.Dispatch<React.SetStateAction<Period>>;
}

const QuoteValuation: React.FC<Props> = ({ tableData, setPeriod }) => {
  return (
    <div className='quote-valuation'>
      <BtnBarOne
        btns={[
          { text: 'Annually', value: 'annual' },
          { text: 'Quarterly', value: 'quarter' },
        ]}
        setState={setPeriod}
      />

      <Table data={tableData} horizontal={true} />
    </div>
  );
};

export default QuoteValuation;
