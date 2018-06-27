import React from 'react';
import './LatestProducts.css';

const LatestProducts = () => {
  return (
    <div className="block latestProducts">
      <a href="#" className="block__header">Latest products</a>
      <div className="latest-products">
        <div className="latest-product">
          <a href="#" className="product__image">
            <img src="" alt="image"/>
          </a>
          <a href="#" className="product-title">ALVERDE 3IN1 FEUCHTIGKEITSSPRAY KOKOS</a>
        </div>
        <div className="latest-product">
          <a href="#" className="product__image">
            <img src="" alt="image"/>
          </a>
          <a href="#" className="product-title">BAREMINERALS BODY DIP HYDRATING BODY CREAM</a>
        </div>
        <div className="latest-product">
          <a href="#" className="product__image">
            <img src="" alt="image"/>
          </a>
          <a href="#" className="product-title">TREND IT UP INSTANT REPAIR NAIL OIL</a>
        </div>
        <div className="latest-product">
          <a href="#" className="product__image">
            <img src="" alt="image"/>
          </a>
          <a href="#" className="product-title">PEARL DROPS COFFEE & TEA STAIN REMOVER</a>
        </div>
      </div>
    </div>
  );
};

export default LatestProducts;