import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import OnlineTab from './TabOnline';
import CashTab from './TabCash';
import PayOnline from './PayOnline';
import PayCash from './PayCash';


const Tabs = () => (
  <Router>
    <div className="col-12">
      <div className="d-flex justify-content-center mtb-1">
        <ul className="nav nav-tabs">
          <OnlineTab />
          <CashTab />
        </ul>
      </div>
    </div>
  </Router>
)

export default Tabs;