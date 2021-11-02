import React from "react";
import ReactDOM from "react-dom";

//* React Router
import { BrowserRouter } from "react-router-dom";

import App from "./App";

//! Moved BrowserRouter into here due to framer motion not allowing browserRouter to be in the same tree
// Source: https://github.com/remix-run/react-router/issues/7015 (SECOND POST)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/react-projects/zoocasa">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
