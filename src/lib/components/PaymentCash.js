import React from 'react';
import Carrousel from './Carrousel';

const PaymentCash = () => (
  <div className="container">
    <div className="row">
      <div className="col-12">
        <p>Selecciona dónde quieres pagar:</p>
        <Carrousel />
        <p>Puedes pagar desde la Web o App móvil del Banco.</p>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <p>Instrucciones de Pago</p>
        {/* <BriefingSection /> */}
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        {/* <OnlineButton /> */}
      </div>
      <div>
      </div>
    </div>
  </div>
)

export default PaymentCash;