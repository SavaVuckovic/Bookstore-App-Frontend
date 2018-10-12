import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getCategories } from '../actions';
import BookList from '../containers/BookList';
import NewBookForm from '../containers/NewBookForm';

class IndexPage extends Component {
  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    return (
      <Fragment>
        <BookList/>
        <NewBookForm/>
      </Fragment>
    );
  }
}

export default connect(null, { getCategories })(IndexPage);