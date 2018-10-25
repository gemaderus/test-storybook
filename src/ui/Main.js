import React from 'react';
import Box from './Box';

const MainContent = ({data}) => {
  return(
    <div className="main-flex">
      <ul className="main grid">
        {data.map((item, index) => {
          return <Box key={item.text} item={item} index={index}/>
        })}
      </ul>
    </div>
  )
}

export default MainContent;
