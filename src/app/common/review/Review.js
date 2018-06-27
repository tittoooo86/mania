import React from 'react';
import './Review.css';
import Rating from '../rating/Rating';

const Review = (props) => {
  return (
    <div className="review">
      <a href="#" className="review__image">
        <img src="http://via.placeholder.com/120x120" alt="Product photo"/>
      </a>
      <a href="#" className="product-title">Lovely sculpting powder</a>
      <Rating />
      <p className="review__description">
        <span>{props.user}: </span>
        {props.reviewText}
      </p>
    </div>
  );
};

export default Review;