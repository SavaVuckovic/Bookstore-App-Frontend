import { SET_ACTIVE_CATEGORY } from '../actions/types';

export default function activeCategoryReducer(state = {}, action) {
  switch (action.type) {
    case SET_ACTIVE_CATEGORY:
      return action.payload;
    default:
      return state;
  }
}