import React from "react";

//Import Components
import List from "./components/list";

const arr = [1, 7, 4, 3, 9, 5];

function Props() {
  function halo() {
    alert("halo");
  }

  return (
    // Code Inside div
    <div>
      <List name="lambo1" year={2010} />
      <List name="lambo2" year={2020} />
      <List name="lambo3" year={2020} />
      <List name="lambo4" year={2020} />
      <List name="ferrari" year={2020} halooo={halo} />
      <List name="merce" year={2020} />
      <List name="tesla" year={2020} />
      <List name="bmw" year={2020} arr={arr} />
    </div>
  );
}

export default Props;
