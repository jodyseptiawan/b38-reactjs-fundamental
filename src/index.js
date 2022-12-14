import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// import component
import Component from "./component";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Component />
  </React.StrictMode>
);
