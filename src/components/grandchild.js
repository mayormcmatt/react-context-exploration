import React, {useState} from 'react';

const GrandchildComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h3>I am the Grandchild Component!</h3>
      <h3>Count result from grandchild component ONLY: {count}</h3>
      <button onClick={() => setCount(count + 1)}> +1 </button>
      <button onClick={() => setCount(count - 1)}> -1 </button>
    </div>
  )
};

export default GrandchildComponent;