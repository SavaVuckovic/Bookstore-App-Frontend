import { combineReducers } from 'redux';
import booksReducer from './books';
import activeBookReducer from './active_book';
import categoriesReducer from './categories';
import commentsReducer from './comments';

const rootReducer = combineReducers({
  books: booksReducer,
  activeBook: activeBookReducer,
  categories: categoriesReducer,
  comments: commentsReducer,
});

export default rootReducer;