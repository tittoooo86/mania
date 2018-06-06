import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Home from '../../home/Home';
import Creams from '../../creams/Creams';
import './Header.css';

class Header extends Component {

  goToCreams = (e) => {
    console.log(this);
  }
  
  render() {
    return (
      <header className="container">
        <Link to="/" className="logo">Cream Mania</Link>
        <nav className="header__nav">
          <div className="nav-link" id="creams-link" onClick={this.goToCreams}>Creams
            <div className="dropdown">
              <div className="container">
                <div className="dropdown-categories">
                  <div className="dropdown__category">
                    <h3 className="category-title">category1</h3>
                    <ul>
                      <li><a href="#">item1</a></li>
                      <li><a href="#">item2</a></li>
                      <li><a href="#">item3</a></li>
                      <li><a href="#">item4</a></li>
                      <li><a href="#">item5</a></li>
                      <li><a href="#">item6</a></li>
                    </ul>
                  </div>
                  <div className="dropdown__category">
                    <h3 className="category-title">category2</h3>
                    <ul>
                      <li><a href="#">item1</a></li>
                      <li><a href="#">item2</a></li>
                      <li><a href="#">item3</a></li>
                      <li><a href="#">item4</a></li>
                      <li><a href="#">item5</a></li>
                      <li><a href="#">item6</a></li>
                    </ul>
                  </div>
                  <div className="dropdown__category">
                    <h3 className="category-title">category3</h3>
                    <ul>
                      <li><a href="#">item1</a></li>
                      <li><a href="#">item2</a></li>
                      <li><a href="#">item3</a></li>
                      <li><a href="#">item4</a></li>
                      <li><a href="#">item5</a></li>
                      <li><a href="#">item6</a></li>
                    </ul>
                  </div>
                  <div className="dropdown__category">
                    <h3 className="category-title">category4</h3>
                    <ul>
                      <li><a href="#">item1</a></li>
                      <li><a href="#">item2</a></li>
                      <li><a href="#">item3</a></li>
                      <li><a href="#">item4</a></li>
                      <li><a href="#">item5</a></li>
                      <li><a href="#">item6</a></li>
                    </ul>
                  </div>
                  <div className="dropdown__category">
                    <h3 className="category-title">category5</h3>
                    <ul>
                      <li><a href="#">item1</a></li>
                      <li><a href="#">item2</a></li>
                      <li><a href="#">item3</a></li>
                      <li><a href="#">item4</a></li>
                      <li><a href="#">item5</a></li>
                      <li><a href="#">item6</a></li>
                    </ul>
                  </div>
                  <div className="dropdown__category">
                    <h3 className="category-title">category6</h3>
                    <ul>
                      <li><a href="#">item1</a></li>
                      <li><a href="#">item2</a></li>
                      <li><a href="#">item3</a></li>
                      <li><a href="#">item4</a></li>
                      <li><a href="#">item5</a></li>
                      <li><a href="#">item6</a></li>
                    </ul>
                  </div>
                  <div className="dropdown__category">
                    <h3 className="category-title">category7</h3>
                    <ul>
                      <li><a href="#">item1</a></li>
                      <li><a href="#">item2</a></li>
                      <li><a href="#">item3</a></li>
                      <li><a href="#">item4</a></li>
                      <li><a href="#">item5</a></li>
                      <li><a href="#">item6</a></li>
                    </ul>
                  </div>
                </div>
                <a href="#">> All categories</a>
              </div>
            </div>
          </div>
          <NavLink to="/brands" activeClassName="nav-link-active"  className="nav-link">Brands</NavLink>
          <NavLink to="/ingredients" activeClassName="nav-link-active"  className="nav-link">Ingredients</NavLink>
          <NavLink to="/sale" activeClassName="nav-link-active"  className="nav-link">For sale</NavLink>
        </nav>
        <div className="header__login">
          <a href="#" className="icon icon-facebook">
            <i className="fab fa-facebook-square fa-lg"></i>
          </a>
          <a href="#" className="icon icon-google">
            <i className="fab fa-google-plus-square fa-lg"></i>
          </a>
          <a href="#">Log in</a>
        </div>
      </header>
    );
  }
}

export default Header;