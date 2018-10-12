import {
  GET_BOOK_COMMENTS,
  CREATE_COMMENT,
  REMOVE_COMMENT
} from '../actions/types';

export default function commentsReducer(state = [], action) {
  switch(action.type) {
    case GET_BOOK_COMMENTS:
      return action.payload;
    case CREATE_COMMENT:
      return [...state, action.payload];
    case REMOVE_COMMENT:
      // HANDLE REMOVING COMMENT
      return state;
    default:
      return state;
  }
}