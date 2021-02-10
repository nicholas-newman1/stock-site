import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Heading from '../../components/Heading';
import SectorTable from '../../components/SectorTable';
import BottomNews from '../../components/BottomNews';
import useScrollTop from '../../hooks/useScrollTop';
import PriceList from '../../components/PriceList';
import HeadingLink from '../../components/HeadingLink';
import useStockPageData from './useStockPageData';
import './stockPage.css';

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
    newsData,
    newsLoading,
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
            <h2 className='stockpage__sub-heading'>
              <HeadingLink to=''>Actives</HeadingLink>
            </h2>
            <PriceList quotes={activesData} loading={activesLoading} />
          </div>

          <div className='stock-page__stock-table'>
            <h2 className='stockpage__sub-heading'>
              <HeadingLink to=''>Gainers</HeadingLink>
            </h2>
            <PriceList quotes={gainersData} loading={gainersLoading} />
          </div>

          <div className='stock-page__stock-table'>
            <h2 className='stockpage__sub-heading'>
              <HeadingLink to=''>Losers</HeadingLink>
            </h2>
            <PriceList quotes={losersData} loading={losersLoading} />
          </div>
        </div>

        <div className='stock-page__sector-table'>
          <h2 className='stockpage__sub-heading'>Sectors</h2>

          <SectorTable
            data={
              showAllSectors
                ? sectorsData
                : sectorsData.filter((x, i) => i < 14)
            }
            loading={sectorsLoading}
          />

          <button
            className='stock-page__btn'
            onClick={() => setShowAllSectors((prev) => !prev)}
          >
            {showAllSectors ? 'Hide Sectors' : 'Show All Sectors'}
          </button>
        </div>
      </div>

      <BottomNews newsData={newsData} loading={newsLoading} />
    </div>
  );
};

export default StockPage;
