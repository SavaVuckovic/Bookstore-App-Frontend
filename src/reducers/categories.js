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
      return [...state, action.payload];
    case REMOVE_CATEGORY:
      return state.filter(c => c.id !== action.payload);
    default:
      return state;
  }
}