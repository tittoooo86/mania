import React from 'react';
import './Shop.css';

const Shop = () => {
  return (
    <div className="block shop">
      <a href="#" className="block__header">Shop</a>
      <div className="shop__products">
        <div className="product">
          <a href="#" className="product__image">
            <img src="" alt=""/>
          </a>
          <a href="#" className="product-title">Lovely sculpting powder</a>
          <div className="product__rating">
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
          </div>
          <span className="product__price">14400 Ft</span>
          <span className="webshop-name">Szepsegtrend.hu</span>
          <div className="shop__links">
            <a href="#">> Kremmania</a>
            <span className="separator">|</span>
            <a href="#">> Shop</a>
          </div>
        </div>
        <div className="product">
          <a href="#" className="product__image">
            <img src="" alt=""/>
          </a>
          <a href="#" className="product-title">Lovely sculpting powder</a>
          <div className="product__rating">
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
          </div>
          <span className="product__price">14400 Ft</span>
          <span className="webshop-name">Szepsegtrend.hu</span>
          <div className="shop__links">
            <a href="#">> Kremmania</a>
            <span className="separator">|</span>
            <a href="#">> Shop</a>
          </div>
        </div>
        <div className="product">
          <a href="#" className="product__image">
            <img src="" alt=""/>
          </a>
          <a href="#" className="product-title">Lovely sculpting powder</a>
          <div className="product__rating">
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
          </div>
          <span className="product__price">14400 Ft</span>
          <span className="webshop-name">Szepsegtrend.hu</span>
          <div className="shop__links">
            <a href="#">> Kremmania</a>
            <span className="separator">|</span>
            <a href="#">> Shop</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;