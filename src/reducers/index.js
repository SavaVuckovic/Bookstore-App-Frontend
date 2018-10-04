import { combineReducers } from 'redux';
import booksReducer from './books';
import categoriesReducer from './categories';
import commentsReducer from './comments';

const rootReducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
  comments: commentsReducer,
});

export default rootReducer;