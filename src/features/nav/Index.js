import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import HelperLinks from './HelperLinks';
import './index.css';

const NavBar = ({ title, routes }) => {
  const role = useSelector((state) => state.authReducer.role) || '';
  return (
    <nav className="navBar">
      <ul className="nav-list">
        <li className="brand">
          <Link to="/" className="nav-brand">
            <h1 className="nav-title">{title}</h1>
          </Link>
        </li>
        {routes.map(
          ({ name, path }) => (
            <HelperLinks path={path} name={name} role={role} key={path} />
          ),
        )}
      </ul>
    </nav>
  );
};

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  })).isRequired,
};

export default NavBar;
