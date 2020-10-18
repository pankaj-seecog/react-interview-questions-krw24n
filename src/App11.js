import React from 'react';

class App11 extends React.Component {
//here callback function for click event is event handler
render(){
  return (
    <div>
<button onClick={(evt)=>{
  alert("hello world!")
}}>Click Me !</button>
    </div>
  )
}

}

export default App11;