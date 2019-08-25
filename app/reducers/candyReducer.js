import axios from 'axios';

//ACTION TYPES:
const GOT_ALL_CANDIES = 'GET_ALL_CANDIES';

//ACTION CREATORS:
const gotAllCandies = (candies) => {
  return {type: GOT_ALL_CANDIES, candies}
}

//THUNK CREATORS:
export const getAllCandies = () => {
  return async (dispatch) => {
    try {
      const candies = await axios.get('/api/candies');
      dispatch(gotAllCandies(candies.data));
    } catch (error) {
      console.log('Failed to load candies!');
    }
  };
};


const candyReducer = (candies = [], action) => {
  switch (action.type) {
    case GOT_ALL_CANDIES:
      return action.candies;
    default:
      return candies;
  }
};

export default candyReducer;
