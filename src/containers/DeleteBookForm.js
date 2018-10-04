import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeBook } from '../actions';

class DeleteBookForm extends Component {
  handleSubmit(e) {
    e.preventDefault();
    // remove action 
    this.props.removeBook(this.props.id);
     // close modal
    if (this.props.callback) {
      this.props.callback();
    }
  }

  render() {
    return (
      <form
        className="delete-book-form"
        onSubmit={this.handleSubmit.bind(this)}
      >
        <p>Please confirm that you want to delete this book.</p>
        <button type="submit">Delete Book</button>
      </form>
    );
  }
}

export default connect(null, { removeBook })(DeleteBookForm);
