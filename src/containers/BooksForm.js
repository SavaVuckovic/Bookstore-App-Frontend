import React, { Component } from 'react';

class BooksForm extends Component {
  render() {
    const categories = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"];

    return (
      <form>
        <input type="text" name="title" placeholder="title"/>
        <select name="categories">
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <button type="submit">Add Book</button>
      </form>
    );
  }
}

export default BooksForm;