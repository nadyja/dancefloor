import React from 'react';
import PropTypes from 'prop-types';
import Form from '../../components/Form';

class ControlsPane extends React.PureComponent {
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
    return (<Form 
      dimensions={this.state}
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
    />
    );
  }
}
ControlsPane.propTypes = {
  dimensions: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
}
export default ControlsPane;
