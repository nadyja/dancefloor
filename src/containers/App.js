import React from 'react';
import Loadable from '../components/Loadable';
import ControlsPane from '../containers/ControlsPane';
import CanvasPane from '../containers/CanvasPane';
import defaultConfig from './defaultConfig.json';
import './App.css';

class App extends React.PureComponent {
  state = {
    loading: false,
    dimensions: {
      columns: 0,
      rows: 0,
    }
  };
  redrawCanvas = (dimensions) => {
    this.setState({ dimensions });
    this.forceUpdate();
  }
  asyncLoadInitialConfig = () => {
    this.setState({ loading: true })
    setTimeout(() => {
      this.setState({
        loading: false,
        dimensions: defaultConfig,
      });
    }, 1000);
  }
  componentDidMount() {
    this.asyncLoadInitialConfig();
  }
  render() {
    const { dimensions, loading } = this.state;
    return (
      <div className="wrapper">
        <Loadable loading={loading}>
          <ControlsPane dimensions={dimensions} onSubmit={this.redrawCanvas} />
          <CanvasPane dimensions={dimensions} />
        </Loadable>
      </div>
    );
  }
}

export default App;
