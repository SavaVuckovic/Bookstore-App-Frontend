import React, { Component } from 'react';
import Book from '../components/Book';

class BooksList extends Component {
  componentDidMount() {
    console.log('connect to redux later');
  }

  render() {
    // render books in a table, each row has id, title and category
    return (
      <Book id={1} title={'test'} category={'test'}/>
    );
  }
}

export default BooksList;