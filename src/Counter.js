import React, { useState, useContext } from 'react';
import { ThemeContext } from './App';

//Hooks need to be called in the exact same order every single time
//and also they need to be at the top level of your functiom
//you can't put hooks in if statements because they would render conditionally

export default function CounterHooks({ initialCount }) {
  console.log('Render Counter');
  const [count, setCount] = useState(initialCount);
  const style = useContext(ThemeContext);

  return (
    <div>
      <button
        style={style}
        onClick={() => setCount((prevCount) => prevCount - 1)}
      >
        -
      </button>
      <span>{count}</span>
      <button
        style={style}
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        +
      </button>
    </div>
  );
}
