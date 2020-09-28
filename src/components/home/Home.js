import React from 'react';
import NewsList from './NewsList';
import PriceList from './PriceList';
import '../../css/home.css';

const Home = () => {
  return (
    <div className='home-container'>
      <div className='home-primary-column'>
        <NewsList />
      </div>
      <div className='home-secondary-column'>
        <PriceList />
      </div>
    </div>
  );
};

export default Home;
