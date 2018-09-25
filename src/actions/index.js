export const CREATE_BOOK = 'CREATE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';

export function createBook(book) {
  return {
    type: CREATE_BOOK,
    payload: book
  };
}

export function removeBook(book) {
  return {
    type: REMOVE_BOOK,
    payload: book
  };
}