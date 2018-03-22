import React from 'react';
import PurchaseDetails from './PurchaseDetails';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import PayOnline from './PayOnline';
import PayCash from './PayCash';

const Main = () => (
    <Router>
      <main>
        <Route path="/" exact component={PayOnline} />
        <Route path="/payment-cash" exact component={PayCash} />
      </main>
    </Router>
)

export default Main;