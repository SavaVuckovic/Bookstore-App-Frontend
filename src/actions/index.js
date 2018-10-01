export const CREATE_BOOK = 'CREATE_BOOK';
export const UPDATE_BOOK = 'UPDATE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';

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
  console.log(id);
  return {
    type: REMOVE_BOOK,
    payload: id
  };
}