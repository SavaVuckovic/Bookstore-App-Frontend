import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getSingleBook, getBookComments, getCategories } from '../actions';
import Book from '../containers/Book';
import CommentList from '../containers/CommentList';
import NewCommentForm from '../containers/NewCommentForm';

class SingleBookPage extends Component {
  componentDidMount() {
    const { getSingleBook, getBookComments, getCategories } = this.props;
    const id = this.props.match.params.id;
    // get the book by ID passed in params
    getSingleBook(id);
    getBookComments(id);
    getCategories();
  }

  render() {
    const { activeBook } = this.props;
    return (
      <Fragment>
        <Book key={activeBook.id} book={activeBook}/>
        <NewCommentForm bookID={activeBook.id}/>
        <CommentList/>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ activeBook }) => {
  return { activeBook };
}


export default connect(mapStateToProps, { 
  getSingleBook, 
  getBookComments,
  getCategories 
})(SingleBookPage);