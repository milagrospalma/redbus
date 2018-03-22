import React from 'react';
import Logo from './Logo';
import Tabs from './Tabs';

const Header = () => (
  <header>
    <div className="container">
      <div className="row">
        <Logo /> 
      </div>
      <div className="row">
        <Tabs />
      </div>
    </div>
  </header>
)

export default Header;