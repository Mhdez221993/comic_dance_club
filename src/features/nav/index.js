import PropTypes from 'prop-types';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './index.css';

const NavBar = ({ title, routes }) => (
  <nav className="navBar">
    <ul className="nav-list">
      <li className="brand">
        <Link to="/" className="nav-brand">
          <h1 className="nav-title">{title}</h1>
        </Link>
      </li>
      {routes.map(({ name, path }) => (
        <li key={path} className="nav-links">
          <NavLink className="links" exact="true" to={path}>{name}</NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  })).isRequired,
};

export default NavBar;
