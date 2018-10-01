import React, { Component } from 'react';
import Navbar from './Navbar';
import BooksList from '../containers/BooksList';
import NewBookForm from '../containers/NewBookForm';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className="container">
          <BooksList/>
          <NewBookForm/>
        </div>
      </div>
    );
  }
}

export default App;
