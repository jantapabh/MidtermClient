import React, { useState } from 'react';
import './App.css';
import PropsTest from './prprsTest';



const App = () => {
   
  // การใช้ State

  const [num, setNum] = useState(0);

  return (
    <div className="App">
      <h1> Counter Program </h1>
      <PropsTest />
    </div>

  );
}

export default App;
