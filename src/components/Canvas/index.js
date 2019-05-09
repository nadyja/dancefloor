import React from 'react';
import PropTypes from 'prop-types';
import helpers from './helpers';
import './styles.css';

class Canvas extends React.Component {
  getRandomColor(i, j) {
    return `rgb(${i * 15}, ${j * 5}, ${(i+j) * 50})`
  }
  renderBlocks(ctx, dimensions, size) {
    const { rows, columns } = dimensions
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        ctx.fillStyle = helpers.getRandomColor(i, j);
        ctx.fillRect(j * size, i * size, size, size);
      }
    }
  }
  renderCanvas() {
    const { dimensions } = this.props;
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    this.renderBlocks(
      ctx, 
      dimensions, 
      helpers.getSize(ctx, dimensions)
    );
  }
  componentDidUpdate() {
    this.renderCanvas();
  }
  componentDidMount() {
    this.renderCanvas();
  }
  render() {
    return (
      <canvas className="canvas" ref="canvas" />
    );
  }
}
Canvas.propTypes = {
  dimensions: PropTypes.object.isRequired,
}
export default Canvas;
