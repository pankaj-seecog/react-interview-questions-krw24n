import React from "react";
import ReactDOM from "react-dom";
import CricketContext from "./context/CricketContext";
import App from "./App";
//redux start
import store from "./store/store";
import {Provider} from "react-redux";
import App17 from './App17';
//redux end

let iniValue = {
  col: "red"
};

// ReactDOM.render(
//   <CricketContext.Provider value={iniValue}>
//     <App />
//   </CricketContext.Provider>,
//   document.getElementById("root")
// );

ReactDOM.render(
  <App17/>,
  document.getElementById("root")
);
