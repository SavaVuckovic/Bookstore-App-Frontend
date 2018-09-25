import React from 'react';
import userImg from '../images/defaultuser.png';

const Navbar = () => (
  <nav className="navbar">
    <div className="container">
      <div className="links">
        <span className="logo">Bookstore CMS</span>
        <span>Books</span>
        <span>Categories</span>
      </div>
      <img className="logged-user" src={userImg} alt="user"/>
    </div>
  </nav>
);

export default Navbar;