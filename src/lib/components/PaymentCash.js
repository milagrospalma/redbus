import React from 'react';
import '../styles/Payment.css';
import Carrousel from './Carrousel';
import CashButton from './BtnCash';

const PaymentCash = () => (
  <div className="container">
    <div className="row">
      <div className="col-12 method">
        <p>Selecciona dónde quieres pagar:</p>
        <Carrousel />
        <p>Puedes pagar desde la Web o App móvil del Banco.</p>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <p className="subtitle">Instrucciones de Pago</p>
        {/* <BriefingSection /> */}
        <p>Cash</p>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <CashButton />
      </div>
      <div>
      </div>
    </div>
  </div>
)

export default PaymentCash;