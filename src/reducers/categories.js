import {
  CREATE_CATEGORY,
  REMOVE_CATEGORY,
  GET_CATEGORIES
} from '../actions/types';

export default function categoriesReducer(state = [], action) {
  switch(action.type) {
    case GET_CATEGORIES:
      return action.payload;
    case CREATE_CATEGORY:
      // HANDLE CREATING CATEGORIES
      return state;
    case REMOVE_CATEGORY:
      // HANDLE REMOVING CATEGORIES
      return state;
    default:
      return state;
  }
}