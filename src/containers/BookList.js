import React, { Component } from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';

class BookList extends Component {
  renderBooks() {
    return this.props.books.map(book => {
      const { id, title, category, author, complete } = book;
      
      return <Book
        id={id}
        key={id}
        title={title} 
        category={category}
        author={author}
        complete={complete}
      />;
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

const mapStateToProps = ({ books }) => {
  return { books };
};
export default connect(mapStateToProps)(BookList);