import axios from 'axios';
import { CREATE_COMMENT, REMOVE_COMMENT } from './types';

const ROOT_URL = 'http://localhost:5000';

export const createComment = comment => dispatch => {
  axios.post(`${ROOT_URL}/comments`, comment)
    .then(res => {
      dispatch({
        type: CREATE_COMMENT,
        payload: res.data
      });
    });
}

export function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    payload: id
  };
}