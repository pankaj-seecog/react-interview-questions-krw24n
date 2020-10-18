import React from "react";
import myHoc from './myHoc'
class India extends React.Component {
  
  render() {
    return (
      <div>
    <p>
Runs : {this.props.runs} <br/>
Players : {this.props.players}
    </p>
    <p>
<button onClick={this.props.four}>Four</button> | 
<button onClick={this.props.six}>Six</button> | 
<button onClick={this.props.out}>Out</button>  
    </p>
      </div>
    );
  }
}

export default myHoc(India);
