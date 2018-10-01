import React, { Fragment } from 'react';
import BookList from '../containers/BookList';
import NewBookForm from '../containers/NewBookForm';

const IndexPage = () => (
  <Fragment>
    <BookList/>
    <NewBookForm/>
  </Fragment>
);

export default IndexPage;