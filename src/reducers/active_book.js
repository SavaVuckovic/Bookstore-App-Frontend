import { GET_SINGLE_BOOK } from '../actions/types';

export default function activeBookReducer(state = {}, action) {
  switch (action.type) {
    case GET_SINGLE_BOOK:
      return action.payload;
    default:
      return state;
  }
}