import React, { useState } from "react";

function State() {
  //init State
  const [count, setCount] = useState(0);

  //Create Function Add
  const add = () => {
    setCount(count + 1);
  };

  //Create Function Less
  const less = () => {
    setCount(count - 1);
  };

  return (
    // Code Inside div
    <div>
      <h1>{count}</h1>
      <button onClick={add}>+</button>
      <button onClick={less}>-</button>
    </div>
  );
}

export default State;
