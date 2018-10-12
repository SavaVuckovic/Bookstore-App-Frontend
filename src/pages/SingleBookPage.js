import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getSingleBook, getBookComments } from '../actions';
import Book from '../components/Book';
import CommentList from '../containers/CommentList';
import NewCommentForm from '../containers/NewCommentForm';

class SingleBookPage extends Component {
  componentDidMount() {
    const { getSingleBook, getBookComments } = this.props;
    const id = this.props.match.params.id;
    // get the book to show by id passed in params
    getSingleBook(id);
    getBookComments(id);
  }

  render() {
    const { id, title, category_name, author, complete } = this.props.activeBook;

    return (
      <Fragment>
        <Book
          id={id}
          title={title} 
          category={category_name}
          author={author}
          complete={complete}
        />
        <NewCommentForm bookID={id}/>
        <CommentList/>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ activeBook }) => {
  return { activeBook };
}


export default connect(mapStateToProps, { getSingleBook, getBookComments })(SingleBookPage);