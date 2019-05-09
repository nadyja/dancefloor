import React from 'react';
import PropTypes from 'prop-types';
import Canvas from '../../components/Canvas';

class CanvasPane extends React.Component {

  componentDidUpdate() {
    Canvas.renderTiles(this.refs.canvas, this.props.dimensions);
  }
  componentDidMount() {
    Canvas.renderTiles(this.refs.canvas, this.props.dimensions);
  }
  render() {
    return (
      <canvas className="canvas" ref="canvas" width="600" />
    );
  }
}
CanvasPane.propTypes = {
  dimensions: PropTypes.object.isRequired,
}
export default CanvasPane;
