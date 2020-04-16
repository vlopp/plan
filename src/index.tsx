import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StandardConfiguration } from "./configurations/StandardConfiguration";
import { store } from "./store";

ReactDOM.render(
  <StandardConfiguration store={store}>
    <App />
  </StandardConfiguration>,
  document.getElementById("root")
);
