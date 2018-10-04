import {
  GET_CATEGORIES,
  CREATE_CATEGORY,
  REMOVE_CATEGORY
} from './types';

export function getCategories() {
  // LATER
  return null;
}

export function createCategory(category) {
  return {
    type: CREATE_CATEGORY,
    payload: category
  };
}

export function removeCategory(id) {
  return {
    type: REMOVE_CATEGORY,
    payload: id
  };
}