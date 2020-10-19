import React,{useContext} from 'react';
import CricketContext from './context/CricketContext';
const App15 = ()=>{
let target = useContext(CricketContext);


  return (
    <div>
The color is {target.col}
    </div>
  )
}

export default App15;