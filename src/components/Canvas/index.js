import React from 'react';
import PropTypes from 'prop-types';

function Canvas({ columns, rows }) {
  return (
    <div>
      Canvas {columns} x {rows}
    </div>
  );
}
Canvas.propTypes = {
  columns: PropTypes.number.isRequired,
  rows: PropTypes.number.isRequired,
}
export default Canvas;
