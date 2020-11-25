import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <div>
      <span>Does it send this way?</span>
      <span>John's div</span>
      <span>Harry's div</span>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
