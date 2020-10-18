import React from "react";

const myHoc = WrapperComponent => {
  class NewComponent extends React.Component {
    constructor() {
      super();
      this.state = {
        runs: 0,
        players: 11
      };
    }

    fourRuns = () => {
      this.setState({
        ...this.state,
        runs: this.state.runs + 4
      });
    };

    sixRuns = () => {
      this.setState({
        ...this.state,
        runs: this.state.runs + 6
      });
    };

    outPlayer = () => {
      this.setState({
        ...this.state,
        players: this.state.players - 1
      });
    };

    render() {
      return (
        <WrapperComponent
          runs={this.state.runs}
          players={this.state.players}
          four={this.fourRuns}
          six={this.sixRuns}
          out={this.outPlayer}
        />
      );
    }
  }
  return NewComponent;
};

export default myHoc;
