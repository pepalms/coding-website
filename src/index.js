import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <div>
      <span>Harry's branch</span>
      <span>Does it send this way?</span>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
