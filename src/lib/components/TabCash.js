import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import Route from 'react-router-dom/Route';

const TabCash = () => (
  <li className="nav-item font-weight-bold">
    <NavLink
      to="/payment-cash"
      exact
      activeStyle={{ color: 'rgb(226, 175, 16)' }}
      className="nav-link">
      Pagar en Efectivo
    </NavLink>
  </li>
)

export default TabCash;