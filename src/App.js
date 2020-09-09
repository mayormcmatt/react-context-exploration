import React, {useState} from 'react';
import './App.css';

import CountContext from './context/count-context';
import Child from './components/child';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    // App component (parent) provides context
    // Children below, in this tree, no matter how deep
    // Can access this context with useContext hook
    <CountContext.Provider value={count}>
      <div className="App">
        <div className="container">
          <h1>I am the Parent Component.</h1>
          <hr/>
          <h1>Clicking this will change the global count, affecting the Grandchild component, too:</h1>
          <button onClick={() => setCount(count + 1)}> +1 </button>
          <button onClick={() => setCount(count - 1)}> -1 </button>
          <h1>This count comes from the global context:</h1>
          <h1>Count: {count}</h1>

          <Child></Child>
        </div>
      </div>
    </CountContext.Provider>
  );
}

export default App;
