import React from 'react';

const Navigation = () => {
  return(
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__list__item">
          <a href="https://redradix.com/agency/" className="link">About</a>
        </li>
        <li className="nav__list__item">
          <a href="https://redradix.com/agency/clients/" className="link">Clients</a>
        </li>
        <li className="nav__list__item">
          <a href="https://redradix.com/agency/trabajos/" className="link">Work</a>
        </li>
        <li className="nav__list__item">
          <a href="https://redradix.com/agency/contacto/" className="link">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;