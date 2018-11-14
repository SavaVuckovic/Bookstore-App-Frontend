import { combineReducers } from 'redux';
import booksReducer from './books';
import activeBookReducer from './active_book';
import categoriesReducer from './categories';
import activeCategoryReducer from './active_category';
import commentsReducer from './comments';

const rootReducer = combineReducers({
  books: booksReducer,
  activeBook: activeBookReducer,
  categories: categoriesReducer,
  activeCategory: activeCategoryReducer,
  comments: commentsReducer,
});

export default rootReducer;