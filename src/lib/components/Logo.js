import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({url}) => (
  <div className="col-5">
    <img className="img-fluid" src={url} alt="Pago Efectivo" />
  </div>
)

Logo.propTypes = {
  url: PropTypes.string
};

export default Logo;