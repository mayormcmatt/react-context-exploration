import React from 'react';
import logo from './logo.svg';
import './App.css';

import Child from './components/child';
import Grandchild from './components/grandchild';

function App() {
  return (
    <div className="App">
      <h1>I am the Parent Component.</h1>
      <Child></Child>
      <Grandchild></Grandchild>
    </div>
  );
}

export default App;
