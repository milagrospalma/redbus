import React from 'react';
import '../styles/PurchaseDetails.css';

const PurchaseDetails = () => (
  <div className="container">
    <div className="row details">
      <div className="col-4 code-box">
        <p>Código de pago</p>
        <h4>9125682</h4>
      </div>
      <div className="col-4 amount-box">
        <p>Total</p>
        <h5>S/140.00</h5>
      </div>
      <div className="col-4 expiry-box">
        <span>
          {/* <i className="fas fa-clock" /> */}
        </span>
        <p>Tu orden expirará</p>
        <p>23 Feb - 01:12 p.m.</p>
      </div>
    </div>
  </div>

)

export default PurchaseDetails;