import React from 'react';
import './Featured.css';

const Featured = () => {
  return (
    <div className="block featured">
      <img className="featured__image" src="" alt="image"/>
      <div className="featured__description">
        <h4 className="featured__title">
          <div>Teszteld le!</div>
          <a href="#">Yves Rocher Hydra vegetal 48 oras hidratalo zseles arcpolo</a>
        </h4>
        <p>Jelentkezz most tesztelőnek és próbáld ki az Yves Rocher Hydra Végétal 48 Órás Hidratáló Zselés Arcápolót! A krémtől a bőr azonnal vízhez jut és 48 órán át folyamatosan hidratált marad. Az eredmény friss és ragyogó arcbőr reggeltől estig. Kattints a részletekért, jelentkezz és legyél a 10 szerencsés egyike. :)</p>
        <a href="#">> Reszletek</a>
      </div>
    </div>
  );
};

export default Featured;