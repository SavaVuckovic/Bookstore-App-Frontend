import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeCategory } from '../actions';

class DeleteCategoryForm extends Component {
  handleSubmit(e) {
    e.preventDefault();
    this.props.removeCategory(this.props.id);
    if (this.props.callback) {
      this.props.callback();
    }
  }

  render() {
    return (
      <form
        className="delete-form"
        onSubmit={this.handleSubmit.bind(this)}
      >
        <p>Please confirm that you want to delete this category.</p>
        <p>All books that belong to this category will also get deleted.</p>
        <button type="submit">Delete Category</button>
      </form>
    );
  }
}

export default connect(null, { removeCategory })(DeleteCategoryForm);