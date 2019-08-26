import React from 'react';
import { connect } from 'react-redux';
import { getAllCandies } from '../reducers/candyReducer';
import CandyBox from './CandyBox';
import { Link } from 'react-router-dom';

class CandyList extends React.Component {

  componentDidMount () {
    this.props.getAllCandies();
  }

  render () {

    return (
      <div id="all-candies">
        {this.props.candies.map(candy => {
          return (
            <Link key={candy.id} to={`/candies/${candy.id}`}>
              <CandyBox candy={candy} />
            </Link>
          )
        })}
      </div>
    )
  }

}

const mapState = (state) => ({
  candies: state.candies
})

const mapDispatch = (dispatch) => ({
  getAllCandies: () => dispatch(getAllCandies())
})

export default connect(mapState, mapDispatch)(CandyList);
