import React, { useState, useCallback } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  // Define a callback function using useCallback
  const incrementCount = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []); // Empty dependency array means this callback won't change

  return (
    <div>
      <h1>Counter: {count}</h1>
      {/* Pass the callback function to a child component */}
      <ChildComponent increment={incrementCount} />
    </div>
  );
};

// Child component that uses the callback function
const ChildComponent = ({ increment }) => {
  // Use the callback function passed from the parent
  return (
    <div>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default App;

