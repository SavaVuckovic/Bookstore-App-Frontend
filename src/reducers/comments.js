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
      return state.filter(c => c.id !== action.payload);
    default:
      return state;
  }
}