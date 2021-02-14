import React from 'react';
import { Helmet } from 'react-helmet-async';
import Heading from '../../components/Heading';
import useScrollTop from '../../hooks/useScrollTop';
import ForexTableContainer from '../../containers/ForexTableContainer';
import GeneralBottomNewsContainer from '../../containers/GeneralBottomNewsContainer';

const ForexPage: React.FC = () => {
  useScrollTop(); // scrolls to top of page on component mount

  return (
    <div>
      <Helmet>
        <title>Forex Quotes | Finance App</title>
        <meta
          name='description'
          content='Free forex quotes. Find free stock quotes, forex rates, cryptocurrency prices, and more.'
        />
      </Helmet>

      <Heading text='Forex' />
      <ForexTableContainer />
      <GeneralBottomNewsContainer />
    </div>
  );
};

export default ForexPage;
