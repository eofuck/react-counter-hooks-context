import React, { useState } from 'react';

//Hooks need to be called in the exact same order every single time
//and also they need to be at the top level of your functiom
//you can't put hooks in if statements because they would render conditionally

export default function CounterHooks({ initialCount }) {
  console.log('Render Counter');
  const [count, setCount] = useState(initialCount);
  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
    </div>
  );
}
