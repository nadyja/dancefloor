import React from 'react';
import PropTypes from 'prop-types';

function Button({ onSubmit }) {
  return (
    <button 
      className="button" 
      onClick={onSubmit}
    > Generate</button>
  );
}
Button.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
export default Button;
