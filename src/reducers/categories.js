import {
  CREATE_CATEGORY,
  REMOVE_CATEGORY
} from '../actions/types';

export default function categoriesReducer(state = [], action) {
  switch(action.type) {
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