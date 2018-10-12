import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getSingleBook } from '../actions';
import Book from '../components/Book';
import CommentList from '../containers/CommentList';
import NewCommentForm from '../containers/NewCommentForm';

class SingleBookPage extends Component {
  componentDidMount() {
    // get the book to show by id passed in params
    this.props.getSingleBook(this.props.match.params.id);
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


export default connect(mapStateToProps, { getSingleBook })(SingleBookPage);