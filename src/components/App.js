import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import IndexPage from '../pages/IndexPage';
import CategoriesPage from '../pages/CategoriesPage';
import SingleBookPage from '../pages/SingleBookPage';

const App = () => (
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
);

export default App;