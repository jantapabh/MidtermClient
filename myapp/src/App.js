import React, { useState } from 'react';
import './App.css';
import PropsTest from './prprsTest';
import StateTest from './stateTest';
import EffectTest from './effect';



const App = () => {
   
  // การใช้ State

  const [num, setNum] = useState(0);

  return (
    <div className="App">
      <h1> Use State </h1>
      <PropsTest />

      <h2>Use Props</h2>
      <StateTest />

      <h2>Use Effect</h2>
      <EffectTest />
    </div>

  );
}

export default App;
