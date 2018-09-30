import React, { Component } from 'react';
import Navbar from './Navbar';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import Modal from './Modal';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className="container">
          <BooksList/>
          <BooksForm/>

          <Modal
            header="Test"
          >
            Just a test
          </Modal>
        </div>
      </div>
    );
  }
}

export default App;
