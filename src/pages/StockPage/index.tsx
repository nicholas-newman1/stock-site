import React from 'react';
import { Helmet } from 'react-helmet-async';
import Heading from '../../common/components/Heading';
import useScrollTop from '../../common/hooks/useScrollTop';
import PriceList from '../../common/components/PriceList';
import useStockPageData from './useStockPageData';
import './stockPage.css';
import { Link } from 'react-router-dom';
import GeneralBottomNewsContainer from '../../common/containers/GeneralBottomNewsContainer';
import { SectorTableContainer } from '../../features/SectorTable';

const StockPage: React.FC = () => {
  useScrollTop(); // scrolls to top of page on component mount

  const {
    activesData,
    activesLoading,
    gainersData,
    gainersLoading,
    losersData,
    losersLoading,
  } = useStockPageData();

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
          <div className='stock-page__stock-table'>
            <h2 className='stock-page__sub-heading'>
              <Link className='heading-link' to=''>
                Actives
              </Link>
            </h2>
            <PriceList quotes={activesData} loading={activesLoading} />
          </div>

          <div className='stock-page__stock-table'>
            <h2 className='stock-page__sub-heading'>
              <Link className='heading-link' to=''>
                Gainers
              </Link>
            </h2>
            <PriceList quotes={gainersData} loading={gainersLoading} />
          </div>

          <div className='stock-page__stock-table'>
            <h2 className='stock-page__sub-heading'>
              <Link className='heading-link' to=''>
                Losers
              </Link>
            </h2>
            <PriceList quotes={losersData} loading={losersLoading} />
          </div>
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
