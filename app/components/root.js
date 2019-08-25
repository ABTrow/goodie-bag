import React from 'react'
import CandyList from './CandyList';

const Root = () => {
  return (
    <div>
      <nav>
        Goodie Bag
      </nav>
      <main>
        <h1>Welcome to the Goodie Bag!</h1>
        <CandyList />
      </main>
    </div>
  )
}

export default Root
