import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createCategory } from '../actions';

class NewCategoryForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.createCategory(this.state);
    this.setState({ name: '' });
  }

  render() {
    return (
      <form
        className="new-category-form"
        onSubmit={this.handleSubmit.bind(this)}
      >
        <input
          type="text"
          name="name"
          placeholder="Category Name"
          value={this.state.name}
          onChange={e => this.setState({ name: e.target.value })}
        />
        <button type="submit">Create</button>
      </form>
    );
  }
}

export default connect(null, { createCategory })(NewCategoryForm);