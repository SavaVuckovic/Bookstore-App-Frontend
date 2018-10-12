import { GET_SINGLE_BOOK, UPDATE_ACTIVE_BOOK } from '../actions/types';

export default function activeBookReducer(state = {}, action) {
  switch (action.type) {
    case GET_SINGLE_BOOK:
    case UPDATE_ACTIVE_BOOK:
      return action.payload;
    default:
      return state;
  }
}