import React, { Component } from 'react';
import Navbar from './Navbar';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <BooksList/>
        <BooksForm/>
      </div>
    );
  }
}

export default App;
