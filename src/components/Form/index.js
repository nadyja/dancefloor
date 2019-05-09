import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Button from './Button';
import './styles.scss';

function Form({ dimensions, handleChange, handleSubmit }) {
 return (
  <div className="controls">
    <Input name="columns" value={dimensions.columns} onChange={handleChange} />
    <Input name="rows" value={dimensions.rows} onChange={handleChange} />
    <Button onSubmit={handleSubmit} />
  </div>
 );
}
Form.propTypes = {
  dimensions: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired, 
}

export default Form;
