import React from 'react';
import '../styles/App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Row from './Row';
import Logo from './Logo';
import NavigationTabs from './NavigationTabs';
import url from '../assets/images/pago-efectivo.png';

import PaymentOnline from './PaymentOnline';
import PaymentCash from './PaymentCash';
import PurchaseDetails from './PurchaseDetails';
import Footer from './Footer';

const App = () => (
  <Router>
    <div>
      <header>
        <div className="container">
          <Row>
            <Logo src={url}/>
          </Row>
          <Row>
            <NavigationTabs />
          </Row>
        </div>
      </header>
      <main>
        <PurchaseDetails />
        <Route path="/" exact component={PaymentOnline} />
        <Route path="/payment-cash" exact component={PaymentCash} />
      </main>
      <Footer />
    </div>
  </Router>
)

export default App;
