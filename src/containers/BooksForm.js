import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBook } from '../actions';

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
      category: ''
    };
  }

  // just temporary uuntil data is fetched from the server
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