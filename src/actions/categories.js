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

export const createCategory = category => dispatch => {
  axios.post(`${ROOT_URL}/categories`, category)
    .then(res => {
      dispatch({
        type: CREATE_CATEGORY,
        payload: res.data
      });
    });
};

export const removeCategory = category_id => dispatch => {
  axios.delete(`${ROOT_URL}/categories/${category_id}`)
    .then(res => {
      dispatch({
        type: REMOVE_CATEGORY,
        payload: category_id
      });
    });
};

export function setActiveCategory(category) {
  return {
    type: SET_ACTIVE_CATEGORY,
    payload: category
  };
};