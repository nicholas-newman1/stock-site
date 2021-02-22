import React, { useEffect } from 'react';
import BottomNews from '../../common/components/BottomNews';
import MainNewsItem from '../../features/MainNewsItem/MainNewsItem';
import { Helmet } from 'react-helmet-async';
import useScrollTop from '../../common/hooks/useScrollTop';
import './home.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../reducers/rootReducer';
import { fetchNews } from '../../actions/newsActions';
import PriceListOverviewContainer from '../../features/PriceListOverview/PriceListOverviewContainer';

const Home: React.FC = () => {
  useScrollTop(); // scrolls to top of page on component mount

  const dispatch = useDispatch();

  const {
    news: { data: newsData, loading: loadingNews, error: newsError },
    realData,
  } = useSelector((state: AppState) => state);

  useEffect(() => {
    dispatch(fetchNews('limit=11&tickers=AAPL,FB,AMZN,TSLA'));
    //eslint-disable-next-line
  }, [realData.status]);

  return (
    <div className='home'>
      <Helmet>
        <title>
          Free Stock Quotes | Stock News | Forex Rates | Cryptocurrencies
        </title>
      </Helmet>
      <div className='home__section-one'>
        <MainNewsItem
          data={newsData[0]}
          loading={loadingNews}
          error={newsError}
        />
        <BottomNews
          newsData={newsData.filter((x, i) => i !== 0)}
          loading={loadingNews}
          error={newsError}
        />
      </div>
      <div className='home__section-two'>
        <PriceListOverviewContainer />
      </div>
    </div>
  );
};

export default Home;
