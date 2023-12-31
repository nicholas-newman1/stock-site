import React from 'react';
import PriceList, {
  PriceListQuote,
} from '../../../../common/components/PriceList';
import './priceOverview.css';

interface PriceList {
  headingLink: string;
  quotes: PriceListQuote[];
  loading: boolean;
}

interface Props {
  pricelists: PriceList[];
}

const PriceOverview: React.FC<Props> = ({ pricelists }) => {
  return (
    <ul className='price-list-overview'>
      {pricelists.map(({ headingLink, quotes, loading }, i) => (
        <li key={i} className='price-list-overview__item'>
          <PriceList
            quotes={quotes}
            link={{ to: `/${headingLink}`, label: headingLink }}
            loading={loading}
          />
        </li>
      ))}
    </ul>
  );
};

export default PriceOverview;
