import React from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import TabsList from './TabsList';
import url from '../assets/images/pago-efectivo.png';

const Header = () => (
  <header>
    <div>
      <img src={url} alt="Pago Efectivo" />
    </div>
    <div>
      <ul>
        <li>Banca por internet</li>
        <li>Pago en efetivo</li>
      </ul>
    </div>
  </header>
)

export default Header;