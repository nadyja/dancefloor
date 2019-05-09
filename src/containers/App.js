import React from 'react';
import Loadable from '../components/Loadable';
import Controls from '../components/Controls';
import Canvas from '../components/Canvas';
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
  setCanvasSize = (dimensions) => {
    this.setState({ dimensions });
  }
  asyncLoadInitialConfig = () => {
    this.setState({ loading: true })
    setTimeout(() => {
      this.setCanvasSize(defaultConfig);
      this.setState({ loading: false });
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
          <Controls dimensions={dimensions} onSubmit={this.setCanvasSize} />
          <Canvas dimensions={dimensions} />
        </Loadable>
      </div>
    );
  }
}

export default App;
