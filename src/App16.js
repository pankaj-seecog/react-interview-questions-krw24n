import React from 'react';

class App16 extends React.Component {

render(){
  return (
    <div>
<h3>Name : {this.props.name}</h3>
<p>
Age : {this.props.age}
</p>
    </div>
  )
}

}

App16.defaultProps = {
  name : "Mohan",
  age : 21
}
export default App16;