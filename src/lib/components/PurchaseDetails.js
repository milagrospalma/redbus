import React from 'react';
import '../styles/PurchaseDetails.css';

const PurchaseDetails = () => (
  <div className="container">
    <div className="row details">
      <div className="col-4 code-box text-center ">
        <p>Código de pago</p>
        <h5 className="font-weight-bold">9125682</h5>
      </div>
      <div className="col-4 amount-box text-center">
        <p>Total</p>
        <h5>S/140.00</h5>
      </div>
      <div className="col-4 expiry-box text-center">
        <p>Tu orden expirará</p>
        <p>
          <i className="fas fa-clock" /> 
          23 Feb - 01:12 p.m.
        </p>
      </div>
    </div>
  </div>

)

export default PurchaseDetails;