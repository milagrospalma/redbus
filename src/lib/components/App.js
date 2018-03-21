import React from 'react';
import '../styles/App.css';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import url from '../assets/images/pago-efectivo.png';
import PaymentOnline from './PaymentOnline';
import PaymentCash from './PaymentCash';
import Footer from './Footer';

const App = () => (
  <Router>
    <div>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-5">
              <img className="img-fluid" src={url} alt="Pago Efectivo" />
            </div>
          </div>
          <div className="row">
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
          </div>
        </div>
      </header>
      <main>
        <Route path="/" exact component={PaymentOnline} />
        <Route path="/payment-cash" exact component={PaymentCash} />
      </main>
      <Footer />
    </div>
  </Router>
)

export default App;
