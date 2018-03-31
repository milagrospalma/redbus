import React from 'react';
import '../styles/Payment.css';
import Carrousel from './Carrousel';
import OnlineButton from './BtnOnline';

const PaymentOnline = () => (
  <div className="container">
    <div className="row">
      <div className="col-12 method">
        <p>Selecciona dónde quieres pagar:</p>
        <Carrousel />
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <p className="subtitle font-weight-bold">Instrucciones de Pago</p>
        <p>Data online</p>
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