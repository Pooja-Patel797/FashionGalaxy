import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { App } from "./app";
import { StateProvider, reducer, initialState } from "./reducers/reducer";
import { Loader } from "./Loader";

ReactDOM.render(
  // React.createElement(RouteComponent),
  <StateProvider reducer={reducer} initialState={initialState}>
    <App />
    <Loader />
  </StateProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
