import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <h1 className="logo">Math Magicians</h1>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/calculator">Calculator</NavLink>
    <NavLink to="/quote">Quote</NavLink>
  </nav>
);

export default Navbar;
