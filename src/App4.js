import React from "react";
import PropTypes from "prop-types";
class App4 extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (<div>
    Name : {this.props.name} <br/>
    Age : {this.props.age}
    </div>);
  }
}

App4.propTypes = {
  name : PropTypes.string,
  age : PropTypes.number
}

export default App4;
