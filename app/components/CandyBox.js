import React from 'react';

const CandyBox = (props) => {
  const candy = props.candy;

  return (
    <div className="candy-box">
      <img src={candy.imageUrl} />
      <h3>{candy.name}</h3>
    </div>
  )
}

export default CandyBox;
