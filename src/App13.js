import React from "react";

class App13 extends React.Component {
  constructor(props) {
    super(props);
    //super required to use this
    //super(props) required to use this.props
    console.log(this.props)
  }

  render() {
    return(
      <div>
        <h2>hello world!</h2>
      </div>
    );
  }
}

export default App13;
