import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Heading from '../../components/Heading';
import SectorTable from '../../components/SectorTable';
import useScrollTop from '../../hooks/useScrollTop';
import PriceList from '../../components/PriceList';
import useStockPageData from './useStockPageData';
import './stockPage.css';
import { Link } from 'react-router-dom';
import GeneralBottomNewsContainer from '../../containers/GeneralBottomNewsContainer';

const StockPage: React.FC = () => {
  useScrollTop(); // scrolls to top of page on component mount

  const [showAllSectors, setShowAllSectors] = useState(false);

  const {
    activesData,
    activesLoading,
    gainersData,
    gainersLoading,
    losersData,
    losersLoading,
    sectorsData,
    sectorsLoading,
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
            <PriceList quotes={activesData} loading={activesLoading} error='' />
          </div>

          <div className='stock-page__stock-table'>
            <h2 className='stock-page__sub-heading'>
              <Link className='heading-link' to=''>
                Gainers
              </Link>
            </h2>
            <PriceList quotes={gainersData} loading={gainersLoading} error='' />
          </div>

          <div className='stock-page__stock-table'>
            <h2 className='stock-page__sub-heading'>
              <Link className='heading-link' to=''>
                Losers
              </Link>
            </h2>
            <PriceList quotes={losersData} loading={losersLoading} error='' />
          </div>
        </div>

        <div className='stock-page__sector-table'>
          <h2 className='stock-page__sub-heading'>Sectors</h2>

          <SectorTable
            data={
              showAllSectors
                ? sectorsData
                : sectorsData.filter((x, i) => i < 14)
            }
            loading={sectorsLoading}
          />

          <button
            className='stock-page__btn btn btn-grey btn-small'
            onClick={() => setShowAllSectors((prev) => !prev)}
          >
            {showAllSectors ? 'Hide Sectors' : 'Show All Sectors'}
          </button>
        </div>
      </div>

      <GeneralBottomNewsContainer />
    </div>
  );
};

export default StockPage;
