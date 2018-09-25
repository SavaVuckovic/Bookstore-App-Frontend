import React, { Component } from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';

class BooksList extends Component {
  componentDidMount() {
    console.log('connect to redux later');
  }

  renderBooks() {
    return this.props.books.map(book => {
      const { id, title, category, author, complete } = book;
      return (
        <Book
          id={id} 
          title={title} 
          category={category}
          author={author}
          complete={complete}
        />
      );
    });
  }
 
  render() {
    return (
      <div className="books-list">
        {this.renderBooks()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

export default connect(mapStateToProps)(BooksList);