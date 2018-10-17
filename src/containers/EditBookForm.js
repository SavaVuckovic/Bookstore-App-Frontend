import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateBook, updateActiveBook } from '../actions';

class EditBookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      category_name: '',
      complete: ''
    };
  }

  renderSelectOptions() {
    return this.props.categories.map(cat => <option key={cat.id}>{cat.name}</option>);
  }

  componentDidUpdate(prevProps) {
    if (this.props.activeBook !== prevProps.activeBook) {
      const { title, author, category_name, complete } = this.props.activeBook;
      this.setState({
        title,
        author,
        category_name,
        complete
      });
    }
  }
  
  handleChange(e) {
    let change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { id, updateBook, updateActiveBook, callback } = this.props;
    // create a new book object
    const book = { id, ...this.state };
    // update actions
    updateBook(book);
    updateActiveBook(book);
    // reset state
    this.setState({
      title: '',
      author: '',
      category_name: '',
      complete: ''
    });
    // execute a callback (close the modal)
    callback();
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
          <label htmlFor="category_name">Category</label>
          <select 
            name="category_name"
            value={this.state.category_name}
            onChange={this.handleChange.bind(this)}
          >
            {this.renderSelectOptions()}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="complete">Progress {this.state.complete} %</label>
          <input 
            type="range" 
            name="complete" 
            min="0" 
            max="100"
            value={this.state.complete}
            onChange={this.handleChange.bind(this)}
          />
        </div>
        <button type="submit" className="btn">Update Book</button>
      </form>
    );
  }
}

const mapStateToProps = ({ categories, activeBook }) => {
  return { categories, activeBook };
}

export default connect(mapStateToProps, { updateBook, updateActiveBook })(EditBookForm);