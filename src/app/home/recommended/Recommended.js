import React from 'react';
import './Recommended.css';

const Recommended = () => {
  return (
    <div className="block recommended">
      <a href="#" className="block__header">Recommended</a>
      <div className="recommended__thumbnails">
        <a href="#" className="recommended__thumbnail"></a>
        <a href="#" className="recommended__thumbnail"></a>
        <a href="#" className="recommended__thumbnail"></a>
        <a href="#" className="recommended__thumbnail">
          <i className="fas fa-angle-right"></i>
        </a>
      </div>
    </div>
  );
};

export default Recommended;