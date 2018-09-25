import { CREATE_BOOK, REMOVE_BOOK } from '../actions';

export default function booksReducer(state = [], action) {
  console.log('runs');
  switch(action.type) {
    case CREATE_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter(b => b !== action.payload);
    default:
      return state;
  }
}