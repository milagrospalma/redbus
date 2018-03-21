import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

const NavigationTabs = () => (
  <Router>
  <div className="col-12">
    <div className="d-flex justify-content-center mtb-1">
      <ul className="nav nav-tabs">
        <li className="nav-item font-weight-bold">
          <NavLink to="/" exact activeStyle={{ color: 'rgb(226, 175, 16)' }} className="nav-link">
            Banca por Internet
          </NavLink>
        </li>
        <li className="nav-item font-weight-bold">
          <NavLink to="/payment-cash" exact activeStyle={{ color: 'rgb(226, 175, 16)' }} className="nav-link">
            Pagar en Efectivo
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
  </Router>
  
)

export default NavigationTabs;