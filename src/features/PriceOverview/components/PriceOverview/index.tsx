import React from 'react';
import PriceList, {
  PriceListQuote,
} from '../../../../common/components/PriceList';
import './priceOverview.css';
import { Link } from 'react-router-dom';

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
          <h2 className='price-list-overview__heading'>
            <Link className='heading-link' to={`/${headingLink}`}>
              {headingLink}
            </Link>
          </h2>
          <PriceList quotes={quotes} loading={loading} />
        </li>
      ))}
    </ul>
  );
};

export default PriceOverview;
