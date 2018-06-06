import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-links">
          <div className="social-links">
            <h4 className="footer__heading">Follow us!</h4>
            <a href="#">
              <i className="fab fa-blogger"></i>
            </a>
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <div className="collect-points">
            <h4 className="footer__heading">Collect points!</h4>
            <a href="#">
              <i className="fas fa-plus-circle"></i>
            </a>
          </div>
          <div className="our-partner">
            <h4 className="footer__heading">Our partner is</h4>
            <a href="#">Szepsegbolt.hu</a>
          </div>
        </div>
        <div className="terms-links">
          <a href="#">Ipresszum, kapcsolat</a>
          <a href="#">Hirdess nalunk</a>
          <a href="#">A kremmaniarol</a>
          <a href="#">Hazirend</a>
          <a href="#">Online Piacter Felhasznalasi Feltetelek</a>
          <a href="#">Felhasznalasi Feltetelek</a>
          <a href="#">Adatvedelmi Politika</a>
        </div>
        <p className="rights">&#64; 2014 KrémMánia Minden jog fenntartva.</p>
      </div>
    </footer>
  );
};

export default Footer;