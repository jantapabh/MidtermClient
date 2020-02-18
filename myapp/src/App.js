import React, { useState } from 'react';



const App = () => {

  // State

  const [num, setNum] = useState(0);

  return (

    <div className="App">
      <div>
        <h1>Counter : {num}</h1>
        <button onClick={() => setNum(num + 1)}> Add </button>
      </div>
    </div>

  );
}

export default App;
