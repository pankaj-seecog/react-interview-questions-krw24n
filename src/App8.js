import React from "react";
import injectSheet from "react-jss";

let styles = {
  myStyle: {
    color: "red"
  },
  btnStyle: {
    color: "blue"
  }
};
const Employee = ({ classes, children }) => {
  return <div className={classes.myStyle}>{children}</div>;
};

const EmployeeWithCss = injectSheet(styles, Employee);

const App8 = () => {
  return (<EmployeeWithCss>Great India !</EmployeeWithCss>);
};
