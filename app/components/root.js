import React from 'react'
import CandyList from './CandyList';
import { Route, Link } from 'react-router-dom';
import Landing from './Landing';
import SingleCandy from './SingleCandy';

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
        <Route path="/candies/:candyId" component={SingleCandy} />
      </main>
    </div>
  )
}

export default Root
