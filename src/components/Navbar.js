import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => (
  <div className="nav-container">
    <nav className="navbar">
      <h1 className="logo">Math Magicians</h1>
      <ul className="nav-links">
        <li><NavLink to="/" className="nav-link">Home</NavLink></li>
        <li><NavLink to="/calculator" className="nav-link">Calculator</NavLink></li>
        <li><NavLink to="/quote" className="nav-link">Quote</NavLink></li>
      </ul>
    </nav>
  </div>
);

export default Navbar;
