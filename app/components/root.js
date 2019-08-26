import React from 'react'
import CandyList from './CandyList';
import { Route, Link } from 'react-router-dom';
import Landing from './Landing';

const Root = () => {
  return (
    <div>
      <nav>
      <Link to="/">Goodie Bag</Link> -
      <Link to="/candies">Candies</Link>
      </nav>
      <main>
        <Route exact path="/" component={Landing} />
        <Route exact path="/candies" component={CandyList} />
      </main>
    </div>
  )
}

export default Root
