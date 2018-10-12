import React, { Component, Fragment } from 'react';
import BookList from '../containers/BookList';

export default class CategoriesPage extends Component {
  render() {
    return (
      <Fragment>
        <BookList/>
      </Fragment>
    );
  }
}