import React, { Component } from 'react';
import Book from '../components/Book';

class BooksList extends Component {
  componentDidMount() {
    console.log('connect to redux later');
  }

  renderBooks() {
    // change later
    return (<Book 
      id={1} 
      title={'Book Title'} 
      category={'Category'}
      author={'Book Author'}
      complete={27}
    />)
  }
 
  render() {
    return (
      <div className="books-list">
        {this.renderBooks()}
      </div>
    );
  }
}

export default BooksList;