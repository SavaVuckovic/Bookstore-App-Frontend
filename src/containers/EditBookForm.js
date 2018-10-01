import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateBook } from '../actions';

class EditBookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      category: '',
      complete: ''
    };
  }

  componentDidMount() {
    // fetch single book here 
    // just temporary
    this.setState({
      title: 'Fake Book 2',
      author: 'Fake Author 2',
      complete: 72,
      category: 'Biography'
    });
  }

  renderSelectOptions() {
    // extract categories to redux state later 
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
      id: this.props.id,
      ...this.state
    }
    this.props.updateBook(book);
    this.setState({
      title: '',
      author: '',
      category: '',
      complete: ''
    });
    // close modal
    if (this.props.callback) {
      this.props.callback();
    }
  }

  render() {
    return (
      <form
        className="edit-book-form"
        onSubmit={this.handleSubmit.bind(this)}
      >
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange.bind(this)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            name="author"
            value={this.state.author}
            onChange={this.handleChange.bind(this)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select 
            name="category"
            value={this.state.category}
            onChange={this.handleChange.bind(this)}
          >
            {this.renderSelectOptions()}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="complete">Progress</label>
          <input 
            type="range" 
            name="complete" 
            min="0" 
            max="100"
            value={this.state.complete}
            onChange={this.handleChange.bind(this)}
          />
        </div>
        <button type="submit">Update Book</button>
      </form>
    );
  }
}

export default connect(null, { updateBook })(EditBookForm);