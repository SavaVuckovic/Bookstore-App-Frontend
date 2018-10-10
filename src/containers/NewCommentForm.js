import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { createComment } from '../actions';

class NewCommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      text: ''
    };
  }

  handleChange(e) {
    let change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment({ ...this.state, book_id: this.props.bookID });
    this.setState({
      author: '',
      text: ''
    });
  }

  render() {
    return (
      <Fragment>
        <h3 className="add-comment-title">Add new comment</h3>
        <form
          className="new-comment-form"
          onSubmit={this.handleSubmit.bind(this)}
        >
          <input
            type="text"
            name="author"
            placeholder="Comment Author"
            value={this.state.author}
            onChange={this.handleChange.bind(this)}
          />
          <textarea
            name="text"
            placeholder="Comment Text"
            value={this.state.text}
            onChange={this.handleChange.bind(this)}
          ></textarea>
          <button type="submit">Add Comment</button>
        </form>
      </Fragment>
    );
  }
}

export default connect(null, { createComment })(NewCommentForm);