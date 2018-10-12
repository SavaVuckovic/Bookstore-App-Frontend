import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBooks, getBooksByCategory } from '../actions';
import Book from '../components/Book';

class BookList extends Component {
  componentDidMount() {
    const { getBooks, getBooksByCategory, activeCategory } = this.props;
    Object.keys(activeCategory).length === 0 ? getBooks() : getBooksByCategory(activeCategory.id);
  }

  renderBooks() {
    return this.props.books.map(book => {
      const { id, title, category_name, author, complete } = book;
      
      return <Book
        id={id}
        key={id}
        title={title} 
        category={category_name}
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

const mapStateToProps = ({ books, activeCategory }) => {
  return { books, activeCategory };
};
export default connect(mapStateToProps, { getBooks, getBooksByCategory })(BookList);