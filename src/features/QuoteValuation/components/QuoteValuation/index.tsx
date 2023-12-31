import React from 'react';
import BtnBarOne from '../../../../common/components/BtnBarOne';
import Spinner from '../../../../common/components/Spinner';
import Table from '../../../../common/components/Table';
import './quoteValuation.css';

interface Props {
  tableData: any[][];
  setPeriod: React.Dispatch<React.SetStateAction<Period>>;
  loading: boolean;
}

const QuoteValuation: React.FC<Props> = ({ tableData, setPeriod, loading }) => {
  return (
    <div className='quote-valuation'>
      <BtnBarOne
        btns={[
          { text: 'Annually', value: 'annual' },
          { text: 'Quarterly', value: 'quarter' },
        ]}
        setState={setPeriod}
      />

      {loading ? <Spinner /> : <Table data={tableData} horizontal={true} />}
    </div>
  );
};

export default QuoteValuation;
