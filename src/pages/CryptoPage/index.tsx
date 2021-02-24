import React from 'react';
import { Helmet } from 'react-helmet-async';
import Heading from '../../common/components/Heading';
import useScrollTop from '../../common/hooks/useScrollTop';
import { CryptoTableContainer } from '../../features/CryptoTable';
import GeneralBottomNewsContainer from '../../common/containers/GeneralBottomNewsContainer';

const CryptoPage: React.FC = () => {
  useScrollTop(); // scrolls to top of page on component mount

  return (
    <div>
      <Helmet>
        <title>Cryptocurrency Quotes | Finance App</title>
        <meta
          name='description'
          content='Free cryptocurrency quotes. Find free stock quotes, forex rates, cryptocurrency prices, and more.'
        />
      </Helmet>

      <Heading text='Cryptocurrencies' />
      <CryptoTableContainer />
      <GeneralBottomNewsContainer />
    </div>
  );
};

export default CryptoPage;
