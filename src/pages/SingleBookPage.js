import React, { Component, Fragment } from 'react';
import Book from '../components/Book';
import CommentList from '../containers/CommentList';

export default class SingleBookPage extends Component {
  render() {
    // FAKE BOOK DATA FOR NOW
    return (
      <Fragment>
        <Book
          id={378213}
          title={'Example Title'} 
          category={'Kids'}
          author={'Example Author'}
          complete={72}
        />
        <CommentList/>
      </Fragment>
    );
  }
}