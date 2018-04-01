import React from 'react';
import '../styles/Footer.css';
import url from '../assets/images/pago-efectivo.png';

const Footer = () => (
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-4">
          <div className="d-flex justify-content-center align-items-center">
            <p>Instrucciones vía: </p>
            <button type="button" className="btn btn-outline-warning">
              <i className="fas fa-print" />
            </button>
          </div>
        </div>
        <div className="col-12 col-md-8">
          <div className="d-flex justify-content-center">
            <div className="col-7">
              <p>Ayuda: <a className="email font-weight-bold" href="mailto:contacto@redbus.pe">contacto@redbus.pe</a></p>
            </div>
            <div className="col-5">
              <p>Pago vía: </p>
                <div className="img-container">
                  <img className="img-fluid" src={url} alt="Pago Efectivo" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer;