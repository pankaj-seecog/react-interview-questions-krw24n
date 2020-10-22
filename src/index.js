import React from "react";
import ReactDOM from "react-dom";
import CricketContext from "./context/CricketContext";
import App from "./App";
//redux start
import store from "./store/store";
import {Provider} from "react-redux";
import Parent1 from './Parent1';
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
  <Parent1/>,
  document.getElementById("root")
);
