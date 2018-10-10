import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getSingleBook } from '../actions';
import Book from '../components/Book';
import CommentList from '../containers/CommentList';
import NewCommentForm from '../containers/NewCommentForm';

class SingleBookPage extends Component {
  componentDidMount() {
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
        <NewCommentForm postID={id}/>
        <CommentList/>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ activeBook }) => {
  return { activeBook };
}


export default connect(mapStateToProps, { getSingleBook })(SingleBookPage);