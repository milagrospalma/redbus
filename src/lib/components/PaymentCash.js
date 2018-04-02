import React from 'react';
import '../styles/Payment.css';
import Carrousel from './Carrousel';
import CashButton from './BtnCash';

const PaymentCash = () => (
  <div className="container method">
    <div className="row">
      <div className="col-12">
        <p>Selecciona dónde quieres pagar:</p>
        <Carrousel />
        <p>Puedes pagar desde la Web o App móvil del Banco.</p>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <p className="subtitle">Instrucciones de Pago</p>
        <p>
          Indica que vas a realizar un pago a la empresa PAGOEFECTIVO.
          <br/>
          Indica el Código CIP: 9125682 y el importe a pagar en Soles.
        </p>
        {/* <BriefingSection /> */}
        <p>Instrucciones - cash</p>
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