import React from 'react';
import C1 from './C1';
class P1 extends React.Component {

constructor(){
  super();
  //the re rendering takes place when the state or props of the component changes
  
  this.state = {
    count : 0
  }

  setInterval(()=>{
let myRandom = Math.random(1,19) 
this.setState({
  count : myRandom
})
},2000)
}

componentDidMount(){



}

render() {
  console.log('Re render ',this.state.count)
  return (
    <div>
<h2>Inside P1 component</h2>
{/* <C1 childCount={this.state.count}/> */}
<C1 />
    </div>
  )
}

}

export default P1;