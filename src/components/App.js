import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCategories } from '../actions';
import Navbar from './Navbar';
import IndexPage from '../pages/IndexPage';
import CategoriesPage from '../pages/CategoriesPage';
import SingleBookPage from '../pages/SingleBookPage';

class App extends Component {
  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    return (
      <Fragment>
        <Navbar/>
        <div className="container">
          <Switch>
            <Route exact path="/" component={IndexPage}/>
            <Route path="/books/:id" component={SingleBookPage}/>
            <Route path="/categories" component={CategoriesPage}/> 
          </Switch>
        </div>
      </Fragment>
    )
  }
}

export default connect(null, { getCategories })(App);
