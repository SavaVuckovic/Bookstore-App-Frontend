import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getCategories } from '../actions';
import CategoryList from '../containers/CategoryList';
import BookList from '../containers/BookList';

class CategoriesPage extends Component {
  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    return (
      <Fragment>
        <CategoryList/>
        <BookList/>
      </Fragment>
    );
  }
}

export default connect(null, { getCategories })(CategoriesPage);