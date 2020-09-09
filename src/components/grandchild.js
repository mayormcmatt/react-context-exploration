import React, {useContext} from 'react';
import CountContext from '../context/count-context';

const GrandchildComponent = () => {
  // This is how to consume the context, or contexts
  const contextCount = useContext(CountContext);

  return (
    <div className="container">
      <h3>I am the Grandchild Component!</h3>
      <h3>Count result from global context (in Parent component): {contextCount}</h3>
    </div>
  )
};

export default GrandchildComponent;