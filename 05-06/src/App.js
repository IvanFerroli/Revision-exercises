import React from 'react';
import './App.css';


function App() {
  const [counterValue, setCounterValue] = React.useState(0);

  return (
    <div className="App">
      <body className="App-body">
        <p>
          Click on the minus (-) or plus (+) buttons to increase or decrease the counter
        </p>
      <Counter counterValue={counterValue} setCounterValue={setCounterValue}/>
      </body>
    </div>
  );
}

export default App;

function Counter(props) {
  let counterValue = props.counterValue
  let setCounterValue = props.setCounterValue
  return(
    <>
      <button className="minus" onClick={() => setCounterValue(counterValue - 1)} >-</button>
      <p>{counterValue}</p>
      <button className="plus" onClick={() => setCounterValue(counterValue + 1)}>+</button>
    </>
  )
}

