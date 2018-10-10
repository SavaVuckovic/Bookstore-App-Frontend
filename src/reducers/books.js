import { 
  GET_BOOKS,
  GET_SINGLE_BOOK,
  GET_BOOKS_BY_CATEGORY,
  CREATE_BOOK,
  UPDATE_BOOK,
  REMOVE_BOOK 
} from '../actions/types';

export default function booksReducer(state = [], action) {
  switch(action.type) {
    case GET_BOOKS:
      return action.payload;
    case CREATE_BOOK:
      return [...state, action.payload];
    case UPDATE_BOOK:
      const newState = state.filter(b => b.id !== action.payload.id);
      return [...newState, action.payload];
    case REMOVE_BOOK:
      return state.filter(b => b.id !== action.payload);
    default:
      return state;
  }
}