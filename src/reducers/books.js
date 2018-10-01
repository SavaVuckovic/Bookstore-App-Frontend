import { 
  CREATE_BOOK,
  UPDATE_BOOK,
  REMOVE_BOOK 
} from '../actions';

export default function booksReducer(state = [], action) {
  switch(action.type) {
    case CREATE_BOOK:
      return [...state, action.payload];
    case UPDATE_BOOK:
      // later
      console.log(action.payload);
      return state;
    case REMOVE_BOOK:
      console.log(action.payload);
      return state.filter(b => b.id !== action.payload);
    default:
      return state;
  }
}