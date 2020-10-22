import React from 'react';

class C1 extends React.PureComponent {
//Pure component makes uses of memoization
render() {
  console.log('comming inside te child component')
  return (
    <div>
<h3>Inside C1 </h3>
    </div>
  )
}

}

export default C1;