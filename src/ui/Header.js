import React, { Component } from 'react';
import Navigation from './Navigation';
import Button from './Button';

const Header = ({ openMenu }) => {
  return (
    <header className="header">
      <div className="header__inner">
        <Button openMenu={openMenu}/>
        <a href="https://redradix.com/" className="logo">Logo</a>
        <Navigation className="header__navigation" />
      </div>
    </header>
  )
}

export default Header;