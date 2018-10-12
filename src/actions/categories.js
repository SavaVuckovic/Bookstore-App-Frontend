import axios from 'axios';
import {
  GET_CATEGORIES,
  CREATE_CATEGORY,
  REMOVE_CATEGORY,
  SET_ACTIVE_CATEGORY
} from './types';

const ROOT_URL = 'http://localhost:5000';

export const getCategories = () => dispatch => {
  axios.get(`${ROOT_URL}/categories`)
    .then(res => {
      dispatch({
        type: GET_CATEGORIES,
        payload: res.data
      });
    });
};

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

export function setActiveCategory(category) {
  return {
    type: SET_ACTIVE_CATEGORY,
    payload: category
  };
}