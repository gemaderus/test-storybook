import React from 'react';
import Navigation from './Navigation';
import Button from './Button';

const Header = () => {
  return(
    <header className="header">
      <Button />
      <a href="#" className="logo">Logo</a>
      <Navigation className="header_navigation"/>
    </header>
  )
}

export default Header;