import React from 'react';

const SingleCandy = (props) => {

  return (
    <div className="candy-box">
      <h2>{props.match.params.candyId}</h2>
    </div>
  )
}

export default SingleCandy;
