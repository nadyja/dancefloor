import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import './styles.scss';
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
        <Input name="columns" value={this.state.columns} onChange={this.handleChange} />
        <Input name="rows" value={this.state.rows} onChange={this.handleChange} />
        <button className="controls__input controls__input--button" onClick={this.handleSubmit}>Generate</button>
      </div>
    );
  }
}
Controls.propTypes = {
  dimensions: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
}
export default Controls;
