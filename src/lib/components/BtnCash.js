import React from 'react';
import '../styles/Button.css';

const CashButton = () => (
  <a className="btn goto" href="https://ubicanos.pagoefectivo.pe/#/?tienda=[idServicio]&moneda=1&monto=100.00&ubicame=true">
    <span>
      <i className="fas fa-arrow-right"></i>
    </span>
    Encuentra tu punto de pago
  </a>

)

export default CashButton;