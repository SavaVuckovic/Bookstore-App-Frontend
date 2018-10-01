import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comment from '../components/Comment';

// fake data for now
const comments = [
  {
    id: 1,
    author: 'Fake User 1',
    text: 'Example Comment Text 1'
  },
  {
    id: 2,
    author: 'Fake User 2',
    text: 'Example Comment Text 2'
  },
  {
    id: 3,
    author: 'Fake User 3',
    text: 'Example Comment Text 3'
  },
];

class CommentList extends Component {
  renderComments() {
    // temp solution
    // return this.props.comments.map(comment => { LATER

    return comments.map(comment => {
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