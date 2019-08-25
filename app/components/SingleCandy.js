import React from 'react';

const SingleCandy = (props) => {
  const candy = props.candy;
  console.log(props);

  return (
    <div>
      <img src={candy.imageUrl} />
      <h3>{candy.name}</h3>
      <p>{candy.description}</p>
      <footer>Quantity: {candy.quantity}</footer>
    </div>
  )
}

export default SingleCandy;
