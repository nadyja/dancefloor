import React from 'react';
import PropTypes from 'prop-types';

function Input({ name, value, onChange }) {
  return (
    <input
      className="input"
      name={name} 
      type="number" 
      value={value} 
      onChange={onChange} 
      placeholder={`Set ${name} quantity`}
      onFocus={(event) => event.target.select()}
    /> 
  );
}
Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
}
export default Input;
