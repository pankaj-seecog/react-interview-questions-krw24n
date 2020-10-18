import React from "react";
class App3 extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Mohan",
      count: 0,
      pre: 0
    };
  }
  incr = () => {
    this.setState((preObj) => {
      console.log('Pre is ',preObj)
      return {
        pre : preObj.count,
        count: this.state.count + 1
      };
    });
  };

  render() {
    return (
      <div>
        Previous count : {this.state.pre}<br />
        Current count : {this.state.count}
        <hr />
        <button onClick={this.incr}>Inc</button>
      </div>
    );
  }
}

export default App3;
