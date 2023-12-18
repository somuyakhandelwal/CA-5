import React from 'react';
import logoSvg from '../../assets/Kalvium-Logo.svg'; 

function Logo() {
  return (
    <div className="logo-container">
      <img src={logoSvg} alt="Kalvium Books Logo" className="logo-svg" />
      <span className="logo-text">Kalvium Books</span>
    </div>
  );
}

export default Logo;
