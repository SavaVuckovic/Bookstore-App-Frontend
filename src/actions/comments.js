import {
  GET_COMMENTS,
  CREATE_COMMENT,
  REMOVE_COMMENT
} from './types';

export function getComments() {
  // LATER
  return 0;
}

export function createComment(comment) {
  return {
    type: CREATE_COMMENT,
    payload: comment
  };
}

export function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    payload: id
  };
}