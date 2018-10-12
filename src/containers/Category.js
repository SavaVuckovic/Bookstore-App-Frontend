import React, { Component } from 'react';

export default class Category extends Component {
  selectCategory() {
    console.log('SELECT ' + this.props.category.title)
  }

  deleteCategory() {
    console.log('DELETE ' + this.props.category.title)
  }

  render() {
    const { id, title } = this.props.category;
    return (
      <div className="category" onClick={this.selectCategory.bind(this)}>
        <h4>{id}, {title}</h4>
        <h5 onClick={this.deleteCategory.bind(this)}>DELETE</h5>
      </div>
    );
  }
}