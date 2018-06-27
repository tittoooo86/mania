import React, { Component } from 'react';
import './Searchbar.css';

class Searchbar extends Component {
  render() {
    return (
      <div className="searchbar">
        <div className="container searchbox">
          <i className="fas fa-search fa-lg"></i>
          <input className="search-input" type="text" placeholder="Search for creams"/>
          <button className="search-btn">Search</button>
        </div>
      </div>
    );
  }
}

export default Searchbar;