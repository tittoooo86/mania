import React from 'react';
import './Review.css';
import Rating from '../rating/Rating';

const Review = (props) => {
  return (
    <div className="review">
      <a href="#" className="review__image">
        <img src="" alt=""/>
      </a>
      <a href="#" className="review__title">Lovely sculpting powder</a>
      <Rating />
      <p className="review__description">Nebelin: Kezdő szettnek jó. A bronzosító alig lâtszik és pár óra után le is kopik. 4-5 alkalommal át kell...</p>
    </div>
  );
};

export default Review;