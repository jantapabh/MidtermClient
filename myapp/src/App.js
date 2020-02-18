import React, { useState } from 'react';
import './App.css';
import PropsTest from './prprsTest';
import StateTest from './stateTest';



const App = () => {
   
  // การใช้ State

  const [num, setNum] = useState(0);

  return (
    <div className="App">
      <h1> Counter Program </h1>
      <PropsTest />

      <h2>Props Test</h2>
      <StateTest />
    </div>

  );
}

export default App;
