import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
(async () => {
  await import('app1/Header')
  await import('app2/Footer')
})()

ReactDOM.render(<App />, document.getElementById("root"));