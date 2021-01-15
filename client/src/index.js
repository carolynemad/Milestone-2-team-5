import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Scheduler from "./components/AC/TA/ViewScheduler";
import "./Scheduler.css";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/";
axios.defaults.headers.common["authtoken"] = localStorage.getItem("authtoken");

export default Scheduler;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
