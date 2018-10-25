import React from 'react';

const Aside = ({ opened }) => {
  const css = opened ? 'aside is-open' : 'aside';

  return (
    <nav className={css}>
      <div className="logo__holder">
        <a href="https://redradix.com" className="logo">Logo</a>
      </div>
      <ul className="aside__list">
        <li className="aside__list__item">
          <a href="https://redradix.com/agency" className="link">About</a>
        </li>
        <li className="aside__list__item">
          <a href="https://redradix.com/agency/clients" className="link">Clients</a>
        </li>
        <li className="aside__list__item">
          <a href="https://redradix.com/agency/work" className="link">Work</a>
        </li>
        <li className="aside__list__item">
          <a href="https://redradix.com/agency/contact" className="link">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Aside;