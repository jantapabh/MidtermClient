import React, { useState } from 'react';
import './App.css';
import App from './App';



const PropsTest = () => {

  // State

  const [num, setNum] = useState(0);

  return (
    <div className="App">
        <div>
        <h1>Result : {num}</h1>
        <button onClick={() => setNum(num + 1)}> Add </button>
        <button onClick={() => setNum(num - 1)}> Delete</button>
        <button onClick={() => setNum(0)}> Reset </button>
      </div>
    </div>
  );
}

export default PropsTest;
