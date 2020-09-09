import React from 'react';
import logo from './logo.svg';
import './App.css';

import Child from './components/child';
import Grandchild from './components/grandchild';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>I am the Parent Component.</h1>
      </div>
      <Child></Child>
      <Grandchild></Grandchild>
    </div>
  );
}

export default App;
