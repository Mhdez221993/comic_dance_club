import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

function HelperLinks({ name, path, role }) {
  if (
    !role && (path === '/reservations/new'
      || path === '/sign_out'
      || path === '/items/new'
      || path === '/items/:itemId'
      || path === '/reservations'
      || path === '/delete')
  ) {
    return null;
  }

  if (role === 'default'
    && (path === '/items/new'
      || path === '/sign_up'
      || path === '/sign_in'
      || path === '/items/:itemId'
      || path === '/delete')
  ) {
    return undefined;
  }

  if (role === 'admin'
    && (path === '/sign_up'
      || path === '/sign_in'
      || path === '/items/:itemId'
      || path === '/delete')
  ) {
    return undefined;
  }

  return (
    <li key={path} className="nav-links">
      <NavLink className="links" exact="true" to={path}>{name}</NavLink>
    </li>
  );
}

HelperLinks.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};

export default HelperLinks;
