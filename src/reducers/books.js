import { 
  GET_BOOKS,
  GET_BOOKS_BY_CATEGORY,
  CREATE_BOOK,
  UPDATE_BOOK,
  REMOVE_BOOK 
} from '../actions/types';

export default function booksReducer(state = [], action) {
  switch(action.type) {
    case GET_BOOKS:
    case GET_BOOKS_BY_CATEGORY:
      return action.payload;
    case CREATE_BOOK:
      return [action.payload, ...state];
    case UPDATE_BOOK:
      const newState = state.filter(b => b.id !== action.payload.id);
      return [action.payload, ...newState];
    case REMOVE_BOOK:
      return state.filter(b => b.id !== action.payload);
    default:
      return state;
  }
}