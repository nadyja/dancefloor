import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
class Controls extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      ...props.dimensions,
    };
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  handleSubmit = () => {
    this.props.onSubmit(this.state)
  }
  render() {
    return (
      <div className="controls">
        <input name="columns" value={this.state.columns} onChange={this.handleChange} placeholder="Set column quantity" />
        <input name="rows" value={this.state.rows} onChange={this.handleChange} placeholder="Set row quantity" />
        <button onClick={this.handleSubmit}>Generate</button>
      </div>
    );
  }
}
Controls.propTypes = {
  dimensions: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
}
export default Controls;
