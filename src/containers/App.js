import React from 'react';
import Controls from '../components/Controls';
import Canvas from '../components/Canvas';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <Controls />
      <Canvas />
    </div>
  );
}

export default App;
