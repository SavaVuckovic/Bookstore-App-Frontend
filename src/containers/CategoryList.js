import React, { Component } from 'react';
import { connect } from 'react-redux';
import Category from './Category';

class CategoryList extends Component {
  renderCategories() {
    return this.props.categories.map(cat => <Category key={cat.id} category={cat}/>);
  }

  render() {
    return (
      <div className="categories-list">
        {this.renderCategories()}
      </div>
    );
  }
}

const mapStateToProps = ({ categories }) => {
  return { categories };
};
export default connect(mapStateToProps)(CategoryList);