import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
// import MainView from "./component(class)/mainView";
import MainView from "./component(hooks)/mainView";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<MainView />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
