import axios from 'axios';
import {
  GET_BOOKS,
  GET_SINGLE_BOOK,
  GET_BOOKS_BY_CATEGORY,
  CREATE_BOOK,
  UPDATE_BOOK,
  UPDATE_ACTIVE_BOOK,
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

export const getSingleBook = book_id => dispatch => {
  axios.get(`${ROOT_URL}/books/${book_id}`)
    .then(res => {
      dispatch({
        type: GET_SINGLE_BOOK,
        payload: res.data
      });
    });
};

export const getBooksByCategory = category_id => dispatch => {
  axios.get(`${ROOT_URL}/categories/${category_id}/books`)
    .then(res => {
      dispatch({
        type: GET_BOOKS_BY_CATEGORY,
        payload: res.data
      });
    });
};

export const createBook = book => dispatch => {
  axios.post(`${ROOT_URL}/books`, book)
    .then(res => {
      dispatch({
        type: CREATE_BOOK,
        payload: res.data
      });
    });
};

export const updateBook = book => dispatch => {
  axios.put(`${ROOT_URL}/books/${book.id}`, book)
    .then(res => {
      dispatch({
        type: UPDATE_BOOK,
        payload: res.data
      });
    });
};

export const updateActiveBook = book => {
  return {
    type: UPDATE_ACTIVE_BOOK,
    payload: book
  };
};

export const removeBook = book_id => dispatch => {
  axios.delete(`${ROOT_URL}/books/${book_id}`)
    .then(res => {
      dispatch({
        type: REMOVE_BOOK,
        payload: book_id
      });
    });
};