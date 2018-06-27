import React from 'react';
import Review from '../../common/review/Review';
import './Reviews.css';
import { reviews } from '../../../mockData';

const Reviews = () => {
  return (
    <div className="reviews block">
      <a href="#" className="block__header">Legujabb velemenyek</a>
      <div className="reviews-inner">
        <Review user={'Nanevie'} reviewText={reviews[0]} />
        <Review user={'Georgia'} reviewText={reviews[1]} />
        <Review user={'Matt'} reviewText={reviews[2]} />
        <Review user={'Zuzanna'} reviewText={reviews[3]} />
      </div>
    </div>
  );
};

export default Reviews;