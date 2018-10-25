import React from 'react';

const Button = ({ openMenu }) => {
  return(
    <button className="button button--hamburger open" onClick={() => {
      openMenu()
    }}>
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
    </button>
  )
}

export default Button;