import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Login from '../login/Login';
import './Header.css';

class Header extends Component {
  constructor() {
    super();
    this.dropdownRef = React.createRef();
    this.state = { isOpen: false };
  }

  // showDropdown = () => {
  //   console.log('fuck this shit');
  // }

  // hideDropdown = () => {
  //   console.log('fuck this shit');
  //   }
  // }
  
  render() {
    const dropdownDisplay = this.state.isOpen ? 'flex' : 'none';

    return (
      <header className="container">
        <Link to="/" className="logo">Cream Mania</Link>
        <nav className="header__nav">
          <NavLink
              to="/creams"
              activeClassName="nav-link-active" 
              className="nav-link"
              onMouseEnter={this.showDropdown}
              onMouseLeave={this.hideDropdown}>Creams</NavLink>
          <div style={{ display: dropdownDisplay}} className="dropdown" ref={this.dropdownRef}>
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
          <NavLink to="/brands" activeClassName="nav-link-active"  className="nav-link">Brands</NavLink>
          <NavLink to="/ingredients" activeClassName="nav-link-active"  className="nav-link">Ingredients</NavLink>
          <NavLink to="/sale" activeClassName="nav-link-active"  className="nav-link">For sale</NavLink>
        </nav>
        <Login />
      </header>
    );
  }
}

export default Header;