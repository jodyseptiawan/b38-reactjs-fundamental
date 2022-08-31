import React from "react";

function EmbedExpression() {
  //Create function here
  function getMajor() {
    return "Full stack";
  }

  //Create a variable here
  const name = "Dumbways";

  return (
    // Code Inside div
    <div>
      <p>
        Welcome to {name} Class {getMajor()} {name}
      </p>
    </div>
  );
}

export default EmbedExpression;
