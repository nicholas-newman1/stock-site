import React from 'react';
import { Helmet } from 'react-helmet-async';
import Heading from '../../common/components/Heading';
import useScrollTop from '../../common/hooks/useScrollTop';
import IndexTableContainer from '../../features/IndexTable/IndexTableContainer';
import GeneralBottomNewsContainer from '../../common/containers/GeneralBottomNewsContainer';

const IndexPage: React.FC = () => {
  useScrollTop(); // scrolls to top of page on component mount

  return (
    <div>
      <Helmet>
        <title>Index Quotes | Finance App</title>
        <meta
          name='description'
          content='Free index quotes. Find free stock quotes, forex rates, cryptocurrency prices, and more.'
        />
      </Helmet>

      <Heading text='Indexes' />
      <IndexTableContainer />
      <GeneralBottomNewsContainer />
    </div>
  );
};

export default IndexPage;
