import React from "react";

class App10 extends React.Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
  }
  render() {
    return (
      <div>
        <input
          value={this.state.name}
          onChange={evt => {
            this.setState({ name: evt.target.value });
          }}
        />
      </div>
    );
  }
}
export default App10;
