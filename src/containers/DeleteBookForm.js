import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeBook } from '../actions';

class DeleteBookForm extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const { removeBook, id, callback } = this.props;
    removeBook(id);
    callback();
  }

  render() {
    return (
      <form
        className="delete-form"
        onSubmit={this.handleSubmit.bind(this)}
      >
        <p>Please confirm that you want to delete this book.</p>
        <button type="submit" className="btn">Delete Book</button>
      </form>
    );
  }
}

export default connect(null, { removeBook })(DeleteBookForm);
