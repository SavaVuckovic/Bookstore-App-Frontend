import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBooks, getBooksByCategory } from '../actions';
import Book from './Book';

class BookList extends Component {
  componentDidMount() {
    const { getBooks, getBooksByCategory, activeCategory } = this.props;
    // if active category is selected, fetch books by that category, otherwise fetch all books
    Object.keys(activeCategory).length === 0 ? getBooks() : getBooksByCategory(activeCategory.id);
  }

  componentDidUpdate(prevProps) {
    const { activeCategory, getBooksByCategory } = this.props;
    // when active category is changed, fetch books by that category
    if (activeCategory !== prevProps.activeCategory) {
      getBooksByCategory(activeCategory.id);
    }
  }

  renderBooks() {
    return this.props.books.map(book => <Book key={book.id} book={book}/>);
  }
 
  render() {
    return (
      <div className="books-list">
        {this.renderBooks()}
      </div>
    );
  }
}

const mapStateToProps = ({ books, activeCategory }) => {
  return { books, activeCategory };
};
export default connect(mapStateToProps, { getBooks, getBooksByCategory })(BookList);