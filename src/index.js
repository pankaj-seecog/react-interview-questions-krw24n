import React from "react";
import ReactDOM from "react-dom";
import CricketContext from './context/CricketContext'
import App from "./App";
let iniValue = {
  col : "red"
}
ReactDOM.render(
  <CricketContext.Provider value={iniValue}>
  <App />
  </CricketContext.Provider>
  , document.getElementById("root"));
