import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./Store/Store";
import App from "./App";
import "primereact/resources/themes/lara-light-cyan/theme.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
