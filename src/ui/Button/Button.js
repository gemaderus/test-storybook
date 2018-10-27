import React from 'react';

const Button = ({ openMenu, className }) => {
  const css = className ? `button button--hamburger ${className}` : 'button button--hamburger';

  return(
    <button className={css} onClick={() => {
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