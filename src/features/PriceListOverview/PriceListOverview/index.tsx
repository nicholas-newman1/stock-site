import React from 'react';
import PriceList, {
  PriceListQuote,
} from '../../../common/components/PriceList';
import './priceListOverview.css';
import { Link } from 'react-router-dom';

interface PriceList {
  headingLink: string;
  quotes: PriceListQuote[];
  loading: boolean;
}

interface Props {
  pricelists: PriceList[];
  error: string;
}

const PriceListOverview: React.FC<Props> = ({ pricelists, error }) => {
  return (
    <ul className='price-list-overview'>
      {pricelists.map(({ headingLink, quotes, loading }, i) => (
        <li key={i} className='price-list-overview__item'>
          <h2 className='price-list-overview__heading'>
            <Link className='heading-link' to={`/${headingLink}`}>
              {headingLink}
            </Link>
          </h2>
          <PriceList quotes={quotes} loading={loading} error={error} />
        </li>
      ))}
    </ul>
  );
};

export default PriceListOverview;
