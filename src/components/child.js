import React, {useState} from 'react';

import Grandchild from './grandchild';

const ChildComponent = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <h2>I am the Child Component!</h2>
      <h2>Count result from child component ONLY: {count}</h2>
      <button onClick={() => setCount(count + 1)}> +1 </button>
      <button onClick={() => setCount(count - 1)}> -1 </button>

      <Grandchild></Grandchild>
    </div>
  )
};

export default ChildComponent;