import React from "react";

function Event() {
  //Create function here
  function halo() {
    alert("Halo batch 38");
  }

  return (
    // Code Inside div
    <div>
      <button onClick={halo}>click here</button>
      <button onClick={() => alert(213)}>click here 2</button>
    </div>
  );
}

export default Event;
