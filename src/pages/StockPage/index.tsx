import React from 'react';
import { Helmet } from 'react-helmet-async';
import Heading from '../../common/components/Heading';
import useScrollTop from '../../common/hooks/useScrollTop';
import GeneralBottomNewsContainer from '../../common/containers/GeneralBottomNewsContainer';
import { SectorTableContainer } from '../../features/SectorTable';
import { ActivesPriceListContainer } from '../../features/ActivesPriceList';
import { GainersPriceListContainer } from '../../features/GainersPriceList';
import { LosersPriceListContainer } from '../../features/LosersPriceList';
import './stockPage.css';

const StockPage: React.FC = () => {
  useScrollTop(); // scrolls to top of page on component mount

  return (
    <div className='stock-page'>
      <Helmet>
        <title>Stock Quotes | Finance App</title>
        <meta
          name='description'
          content='Free stock quotes. Find free stock quotes, forex rates, cryptocurrency prices, and more.'
        />
      </Helmet>

      <Heading text='Stocks' />

      <div className='stock-page__content'>
        <div className='stock-page__stocklists'>
          <ActivesPriceListContainer />
          <GainersPriceListContainer />
          <LosersPriceListContainer />
        </div>

        <div className='stock-page__sector-table'>
          <h2 className='stock-page__sub-heading'>Sectors</h2>
          <SectorTableContainer />
        </div>
      </div>

      <GeneralBottomNewsContainer />
    </div>
  );
};

export default StockPage;
