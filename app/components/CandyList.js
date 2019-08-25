import React from 'react';
import { connect } from 'react-redux';
import { getAllCandies } from '../reducers/candyReducer';
import SingleCandy from './SingleCandy';

class CandyList extends React.Component {

  componentDidMount () {
    this.props.getAllCandies();
  }

  render () {

    return (
      <div>
        {this.props.candies.map(candy => {
          return <SingleCandy candy={candy} />
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
