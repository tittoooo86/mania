import React from 'react';
import './Featured.css';

const Featured = () => {
  return (
    <div className="block featured">
      <img className="featured__image" src={require("../../../images/img-04.png")} alt="Featured product"/>
      <div className="featured__description">
        <a href="#" className="product-title">Yves Rocher Hydra vegetal 48 oras hidratalo zseles arcpolo</a>
        <p>Jelentkezz most tesztelőnek és próbáld ki az Yves Rocher Hydra Végétal 48 Órás Hidratáló Zselés Arcápolót! A krémtől a bőr azonnal vízhez jut és 48 órán át folyamatosan hidratált marad. Az eredmény friss és ragyogó arcbőr reggeltől estig. Kattints a részletekért, jelentkezz és legyél a 10 szerencsés egyike. :)</p>
        <a className="read-more-link" href="#">Reszletek 
          <i className="fas fa-angle-right"></i>
        </a>
      </div>
    </div>
  );
};

export default Featured;