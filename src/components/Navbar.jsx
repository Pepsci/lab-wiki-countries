import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav-bar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">
        LAB - WikiCountries.
      </NavLink>
    </nav>
  );
};

export default Navbar;
