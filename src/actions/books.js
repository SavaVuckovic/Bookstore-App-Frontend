import {
  GET_BOOKS,
  GET_SINGLE_BOOK,
  CREATE_BOOK,
  UPDATE_BOOK,
  REMOVE_BOOK
} from './types';

export function getBooks() {
  // LATER
  return 0;
}

export function getSingleBook() {
  // LATER
  return 0;
}

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