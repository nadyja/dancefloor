import React from 'react';
import PropTypes from 'prop-types';

function Button({ onSubmit }) {
  return (
    <button 
      className="controls__input controls__input--button" 
      onClick={onSubmit}
    > Generate</button>
  );
}
Button.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
export default Button;
