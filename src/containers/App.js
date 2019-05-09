import React from 'react';
import Loadable from '../components/Loadable';
import Controls from '../components/Controls';
import Canvas from '../components/Canvas';
import defaultConfig from './defaultConfig.json';
import './App.css';

class App extends React.PureComponent {
  state = {
    loading: false,
    columns: 0,
    rows: 0,
  };
  initialConfigSuccess = (config) => {
    this.setState({
      loading: false,
      ...config,
    });
  }
  asyncLoadInitialConfig = () => {
    this.setState({
      loading: true,
    })
    setTimeout(() => this.initialConfigSuccess(defaultConfig), 1000);
  }
  componentDidMount() {
    this.asyncLoadInitialConfig();
  }
  render() {
    const { columns, rows, loading } = this.state;
    return (
      <div className="wrapper">
        <Loadable loading={loading}>
          <Controls />
          <Canvas columns={columns} rows={rows} />
        </Loadable>
      </div>
    );
  }
}

export default App;
