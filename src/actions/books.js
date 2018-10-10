import axios from 'axios';
import {
  GET_BOOKS,
  GET_SINGLE_BOOK,
  GET_BOOKS_BY_CATEGORY,
  CREATE_BOOK,
  UPDATE_BOOK,
  REMOVE_BOOK
} from './types';

const ROOT_URL = 'http://localhost:5000';

export const getBooks = () => dispatch => {
  axios.get(`${ROOT_URL}/books`)
    .then(res => {
      dispatch({
        type: GET_BOOKS,
        payload: res.data
      });
    });
};

export function getSingleBook() {
  // LATER
  return 0;
}

export function getBooksByCategory() {
  // LATER
  return 0;
}

export const createBook = book => dispatch => {
  axios.post(`${ROOT_URL}/books`, book)
    .then(res => {
      dispatch({
        type: CREATE_BOOK,
        payload: res.data
      });
    });
};

export function updateBook(book) {
  return {
    type: UPDATE_BOOK,
    payload: book
  };
}

export function removeBook(id) {
  return {
    type: REMOVE_BOOK,
    payload: id
  };
}