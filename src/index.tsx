import React from "react";
import ReactDOM from "react-dom";
import "ress";
import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "./style.scss";
import { Provider } from "react-redux";
import createStore from "./createStore";

const store = createStore();

console.log(store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
