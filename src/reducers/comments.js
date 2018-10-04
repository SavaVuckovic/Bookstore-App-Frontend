import {
  CREATE_COMMENT,
  REMOVE_COMMENT
} from '../actions/types';

export default function commentsReducer(state = [], action) {
  switch(action.type) {
    case CREATE_COMMENT:
      // HANDLE CREATING COMMENT
      return state;
    case REMOVE_COMMENT:
      // HANDLE REMOVING COMMENT
      return state;
    default:
      return state;
  }
}