import React from 'react';
import PurchaseDetails from './PurchaseDetails';
import PaymentMethods from './PaymentMethods';
import PaymentInstruccions from './PaymentInstruccions';
import OnlineButton from './BtnOnline';

const PayOnline = () => (
  <div className="container">
    <PurchaseDetails />
    <PaymentMethods />
    <PaymentInstruccions />
    <OnlineButton />
  </div>
)

export default PayOnline;