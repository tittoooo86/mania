import React from 'react';
import Button from '@material-ui/core/Button';
import './CtaButtons.css';

const CtaButtons = ( ) => {
  const style = {
    margin: '0 1.5rem'
  }
  return (
    <div className="ctaButtons">
      <Button size="large" variant="contained" color="secondary">
        <i className="fas fa-pencil-alt"></i>Irj velemenyt
      </Button>
      <Button size="large" variant="contained" color="secondary" style={style}>
        <i className="fas fa-camera"></i>Mutasd a sminked
      </Button>
      <Button size="large" variant="contained" color="secondary">
        <i className="fas fa-chart-pie"></i>Elemezd ki a kremed
      </Button>
    </div>
  );
};

export default CtaButtons;