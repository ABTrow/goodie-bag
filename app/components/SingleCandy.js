import React from 'react';

const SingleCandy = (props) => {
  const candy = props.candy;
  console.log(props);

  return (
    <div className="candy-box">
      <img src={candy.imageUrl} />
      <h3>{candy.name}</h3>
      <br />
      <br />
    </div>
  )
}

export default SingleCandy;
