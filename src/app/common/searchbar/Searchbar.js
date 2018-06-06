import React, { Component } from 'react';
import './Searchbar.css';

class Searchbar extends Component {
  render() {
    return (
      <div className="searchbar section">
        <div className="container">
          <span className="searchbar__title">Search Creams</span>
          <div className="searchbox">
            <i className="fas fa-search fa-lg"></i>
            <input className="search-input" type="text" placeholder="Search for creams"/>
            <button className="search-btn">Search</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Searchbar;