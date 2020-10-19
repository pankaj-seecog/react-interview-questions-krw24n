import React from 'react';
import CricketContext from './context/CricketContext'
class App14 extends React.Component {


render(){
  return (
    <CricketContext.Consumer>
{
  (val)=>{
return (
  <span>
{val.col}
  </span>
)
  }
}
    </CricketContext.Consumer>
  )
}

}

export default App14;