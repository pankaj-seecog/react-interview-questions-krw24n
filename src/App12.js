import React, { createRef } from "react";

class App12 extends React.Component {
  //here callback function for click event is event handler

  constructor() {
    super();
    this.myInput = createRef();
  }

  changeBackground = () => {

  this.myInput.current.value="pankaj";
  this.myInput.current.style.color = "red";
  this.myInput.current.style.fontFamily = "Georgia";
  this.myInput.current.style.fontSize = "20px";
  
  };

  render() {
    return (
      <div>
        <input ref={this.myInput} />
        <br />
        <button onClick={this.changeBackground}>Click Me</button>
      </div>
    );
  }
}

export default App12;
