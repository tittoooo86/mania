import React from 'react';
import './Advert.css';

const Advert = () => {
  return (
    <div className="advert">
      <p className="advert__title">Advert
      <br/>Some descripion</p>
      <img className="advert__image" src={require("../../../images/img-01.jpg")} alt="Advert"/>
    </div>
  );
};

export default Advert;