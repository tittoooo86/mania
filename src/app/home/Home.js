import React from 'react';
import Featured from './featured/Featured';
import Advert from '../common/advert/Advert';
import CtaButtons from './ctaButtons/CtaButtons';
import Review from '../common/review/Review';
import Shop from '../common/shop/Shop';
import Recommended from './recommended/Recommended';
import LatestProducts from './latestProducts/LatestProducts';
import './Home.css';

const Home = (props) => {

  return (
    <React.Fragment>
      <div className="container section">
        <Featured />
        <Advert />
      </div>
      <CtaButtons />
      <div className="container section">
        <div className="block">
          <a href="#" className="block__header">Legujabb velemenyek</a>
          <div className="reviews">
            <Review user={true} rating='stars' />
            <Review user={true} rating='stars' />
            <Review user={true} rating='stars' />
            <Review user={true} rating='stars' />
          </div>
        </div>
      </div>
      <div className="container section">
        <Shop />
      </div>
      <div className="container section">
        <Recommended />
        <LatestProducts />
      </div>
    </React.Fragment>
  );
};

export default Home;