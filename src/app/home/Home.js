import React from 'react';
import Featured from './featured/Featured';
import Advert from '../common/advert/Advert';
import CtaButtons from './ctaButtons/CtaButtons';
import Reviews from './reviews/Reviews';
// import Shop from '../common/shop/Shop';
import Recommended from './recommended/Recommended';
import LatestProducts from './latestProducts/LatestProducts';
import './Home.css';

const Home = (props) => {

  return (
    <div className="grid-container">
      <Featured />
      <Advert />
      <CtaButtons />
      <Reviews />
      <Recommended />
      <LatestProducts />
    </div>
  );
};

export default Home;