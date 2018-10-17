import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comment from './Comment';

class CommentList extends Component {
  renderComments() {
    return this.props.comments.map(comm => <Comment key={comm.id} comment={comm} />);
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