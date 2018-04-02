import React from 'react';
import '../styles/Payment.css';
import Carrousel from './Carrousel';
import OnlineButton from './BtnOnline';

const PaymentOnline = () => (
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
        <p>Instrucciones - online</p>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <OnlineButton />
      </div>
    </div>
  </div>
)

export default PaymentOnline;