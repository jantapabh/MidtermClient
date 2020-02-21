import React, { useState } from 'react';
import './App.css';
import App from './App';


const PropsTest = () => {


  // State

  const [num, setNum] = useState(0);
  const [count, setCount] = useState(0);

  return (

    <div className="App">
        <div>
        <h1>Result : {num}</h1>
        <button onClick={() => setNum(num + 1)}> Add </button>
        <button onClick={() => setNum(num - 1)}> Delete</button>
        <button onClick={() => setNum(0)}> Reset </button>
        <h1>Result : {num}</h1>
        <input type="text"
        value={count}
        onchange={(e) => setCount(e.target.value)} />
      </div>
      
    </div>
  );
}

export default PropsTest;
