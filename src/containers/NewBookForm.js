import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { createBook } from '../actions';

// remove later when backend is created
const fakeBooks = [
  {
    id: 1,
    title: 'Fake Book 1',
    author: 'Fake Author 1',
    complete: 94,
    category: 'History'
  },
  {
    id: 2,
    title: 'Fake Book 2',
    author: 'Fake Author 2',
    complete: 72,
    category: 'Biography'
  },
  {
    id: 3,
    title: 'Fake Book 3',
    author: 'Fake Author 3',
    complete: 33,
    category: 'Kids'
  },
  {
    id: 4,
    title: 'Fake Book 4',
    author: 'Fake Author 4',
    complete: 14,
    category: 'Kids'
  },
  {
    id: 5,
    title: 'Fake Book 5',
    author: 'Fake Author 5',
    complete: 50,
    category: 'Learning'
  }
];

class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      category: ''
    };
  }

  // just temporary until data is fetched from the server
  componentDidMount() {
    fakeBooks.forEach(book => this.props.createBook(book));
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
    const { title, author, category } = this.state;
    const book = {
      id: Math.random(),
      complete: 0,
      title,
      author,
      category
    };
    this.props.createBook(book);
    this.setState({ 
      title: '',
      author: '',
      category: ''
    });
  }
  
  render() {
    return (
      <Fragment>
        <h3 className="add-book-title">Add new book</h3>
        <form
          className="new-book-form"
          onSubmit={this.handleSubmit.bind(this)
        }>
          <input 
            type="text" 
            name="title"
            placeholder="Title"
            value={this.state.title}
            onChange={this.handleChange.bind(this)}
          />
          <input 
            type="text" 
            name="author"
            placeholder="Author"
            value={this.state.author}
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
      </Fragment>
    );
  }
}

export default connect(null, { createBook })(BooksForm);