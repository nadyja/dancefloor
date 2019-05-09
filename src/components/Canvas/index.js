import React from 'react';
import PropTypes from 'prop-types';
import helpers from './helpers';
import styles from './styles.css';

class Canvas extends React.Component {
  getRandomColor(i, j) {
    return `rgb(${i * 15}, ${j * 5}, ${(i+j) * 50})`
  }
  renderBlocks(ctx, rows, columns, size) {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        ctx.fillStyle = helpers.getRandomColor(i, j);
        ctx.fillRect(j * size, i * size, size, size);
      }
    }
  }
  componentDidMount() {
    const { columns, rows } = this.props;
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    const size = helpers.getSize(ctx, columns, rows);
    this.renderBlocks(ctx, rows, columns, size);
  }
  render() {
    return (
      <canvas className="canvas" ref="canvas" />
    );
  }
}
Canvas.propTypes = {
  columns: PropTypes.number.isRequired,
  rows: PropTypes.number.isRequired,
}
export default Canvas;
