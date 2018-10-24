import React from 'react';
import Item from './Item';

const MainContent = () => {
  const items = ['a', 'b', 'c', 'd', 'e', 'f'];

  return(
    <div className="main-flex">
      <ul className="main">
        {items.map((item) => {
          return <Item key={items[item]} />
        })}
      </ul>
    </div>
  )
}

export default MainContent;
