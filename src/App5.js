import React from "react";
import PropTypes from "prop-types";
import App4 from './App4';
class App5 extends React.Component {
  constructor() {
    super();
  }

//In APp4 we have applied the Prop Types
  render() {
    return (<App4 name="sohan" age={21}/>);
  }
}

export default App5;
