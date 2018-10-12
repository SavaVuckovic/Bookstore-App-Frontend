import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comment from '../components/Comment';

class CommentList extends Component {
  renderComments() {
    return this.props.comments.map(comment => {
      const { id, author, text } = comment;

      return <Comment
        id={id}
        key={id}
        author={author}
        text={text}
      />;
    });
  }

  render() {
    return (
      <div className="comments-list">
        {this.renderComments()}
      </div>
    );
  }
}

const mapStateToProps = ({ comments }) => {
  return { comments };
};
export default connect(mapStateToProps)(CommentList);