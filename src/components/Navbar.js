import React from 'react';
import { Link } from 'react-router-dom';
import userImg from '../images/defaultuser.png';

const Navbar = () => (
  <nav className="navbar">
    <div className="container">
      <div className="links">
        <Link to="/" className="logo">Bookstore CMS</Link>
        <Link to="/" className="nav-link">Books</Link>
        <Link to="/categories" className="nav-link">Categories</Link>
      </div>
      <img className="logged-user" src={userImg} alt="user"/>
    </div>
  </nav>
);

export default Navbar;