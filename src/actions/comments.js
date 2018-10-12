import axios from 'axios';
import {
  GET_BOOK_COMMENTS,
  CREATE_COMMENT, 
  REMOVE_COMMENT 
} from './types';

const ROOT_URL = 'http://localhost:5000';

export const getBookComments = book_id => dispatch => {
  axios.get(`${ROOT_URL}/books/${book_id}/comments`)
    .then(res => {
      dispatch({
        type: GET_BOOK_COMMENTS,
        payload: res.data
      });
    });
};

export const createComment = comment => dispatch => {
  axios.post(`${ROOT_URL}/comments`, comment)
    .then(res => {
      dispatch({
        type: CREATE_COMMENT,
        payload: res.data
      });
    });
};

export function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    payload: id
  };
};