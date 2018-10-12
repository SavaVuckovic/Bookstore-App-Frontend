import React, { Component } from 'react';

export default class Category extends Component {
  selectCategory() {
    console.log('SELECT ' + this.props.category.title)
  }

  deleteCategory() {
    console.log('DELETE ' + this.props.category.title)
  }

  render() {
    const { name } = this.props.category;
    return (
      <div className="category" onClick={this.selectCategory.bind(this)}>
        <h4>{name}</h4>
        <div className="delete-icon-wrapper" onClick={this.deleteCategory.bind(this)}>
          <i className="fas fa-trash-alt"></i>
        </div>
      </div>
    );
  }
}