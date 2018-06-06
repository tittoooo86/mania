import React from 'react';
import Advert from '../common/advert/Advert';
import Review from '../common/review/Review';
import Shop from '../common/shop/Shop';


const Creams = (props) => {

  console.log(props);

  return (
    <React.Fragment>
      <div className="container">
        <Advert />
      </div>
      <div className="container">
        <Review />
      </div>
      <div className="container">
        <Shop />
      </div>
    </React.Fragment>
  );
};

export default Creams;