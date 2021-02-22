import React from 'react';
import { Helmet } from 'react-helmet-async';
import Heading from '../../common/components/Heading';
import useScrollTop from '../../common/hooks/useScrollTop';
import CommodityTableContainer from '../../features/CommodityTable/CommodityTableContainer';
import GeneralBottomNewsContainer from '../../common/containers/GeneralBottomNewsContainer';

const CommodityPage: React.FC = () => {
  useScrollTop(); // scrolls to top of page on component mount

  return (
    <div>
      <Helmet>
        <title>Commodity Quotes | Finance App</title>
        <meta
          name='description'
          content='Free commodity quotes. Find free stock quotes, forex rates, cryptocurrency prices, and more.'
        />
      </Helmet>

      <Heading text='Commodities' />
      <CommodityTableContainer />
      <GeneralBottomNewsContainer />
    </div>
  );
};

export default CommodityPage;
