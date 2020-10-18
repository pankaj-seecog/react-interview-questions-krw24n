import React from "react";
class App2 extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Mohan",
      count: 0
    };
  }
  incr = () => {
    this.setState(
      {
        count: this.state.count + 1
      },
      () => {
        setTimeout(() => {
          this.setState({
            count: this.state.count + 1
          });
        }, 5000);
      }
    );
  };
  render() {
    return (
      <div>
        The count : {this.state.count}
        <hr />
        <button onClick={this.incr}>Inc</button>
      </div>
    );
  }
}

export default App2;
