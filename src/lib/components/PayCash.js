import React from 'react';
import PurchaseDetails from './PurchaseDetails';
import PaymentMethods from './PaymentMethods';
import PaymentInstruccions from './PaymentInstruccions';
import CashButton from './BtnCash';

const PayCash = () => (
  <div className="container">
    <PurchaseDetails />
    <PaymentMethods />
    <PaymentInstruccions />
    <CashButton />
  </div>
)

export default PayCash;