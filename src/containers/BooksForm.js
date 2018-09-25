import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBook } from '../actions';

class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: ''
    };
  }

  renderSelectOptions() {
    const categories = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"];
    return categories.map((cat, index) => <option key={index}>{cat}</option>);
  }

  handleChange(e) {
    let change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  }

  handleSubmit(e) {
    e.preventDefault();
    const book = {
      id: Math.random(),
      title: this.state.title,
      category: this.state.category
    };
    this.props.createBook(book);
    this.setState({ 
      title: '',
      category: ''
    });
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input 
          type="text" 
          name="title" 
          value={this.state.title}
          onChange={this.handleChange.bind(this)}
        />
        <select 
          name="category"
          value={this.state.category}
          onChange={this.handleChange.bind(this)}
        >
          {this.renderSelectOptions()}
        </select>
        <button type="submit">Add Book</button>
      </form>
    );
  }
}

export default connect(null, { createBook })(BooksForm);