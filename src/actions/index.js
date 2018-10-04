import {
  CREATE_BOOK,
  UPDATE_BOOK,
  REMOVE_BOOK
} from './types';

export function createBook(book) {
  return {
    type: CREATE_BOOK,
    payload: book
  };
}

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