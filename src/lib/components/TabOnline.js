import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import Route from 'react-router-dom/Route';

const TabOnline = () => (
  <li className="nav-item font-weight-bold">
    <NavLink
      to="/"
      exact
      activeStyle={{ color: 'rgb(226, 175, 16)' }}
      className="nav-link">
      Banca por Internet
    </NavLink>
  </li>
)

export default TabOnline;