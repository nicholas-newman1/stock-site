import React from 'react';
import PriceList, { PriceListQuote } from '../PriceList';
import HeadingLink from '../HeadingLink';
import './priceListOverview.css';

interface PriceList {
  headingLink: string;
  quotes: PriceListQuote[];
  loading: boolean;
}

interface Props {
  pricelists: PriceList[];
}

const PriceListOverview: React.FC<Props> = ({ pricelists }) => {
  return (
    <ul className='price-list-overview'>
      {pricelists.map(({ headingLink, quotes, loading }, i) => (
        <li key={i} className='price-list-overview__item'>
          <h2 className='price-list-overview__heading'>
            <HeadingLink to={`/${headingLink}`}>{headingLink}</HeadingLink>
          </h2>
          <PriceList quotes={quotes} loading={loading} />
        </li>
      ))}
    </ul>
  );
};

export default PriceListOverview;
