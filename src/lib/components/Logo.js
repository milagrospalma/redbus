import React from 'react';
import PropTypes from 'prop-types';
import url from '../assets/images/pago-efectivo.png';

const Logo = () => (
  <div className="col-5">
    <img className="img-fluid" src={url} alt="Pago Efectivo" />
  </div>
)

Logo.propTypes = {
  url: PropTypes.string
};

export default Logo;