import React from 'react';

const Box = ({item}) => {
  return(
    <li className="box">{item.text}</li>
  )
}

export default Box;