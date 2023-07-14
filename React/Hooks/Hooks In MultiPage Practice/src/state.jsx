import React from 'react'

export default function State() {

    const [count,setCount] = React.useState(0)

function incFun(){
    setCount(pr=>pr+1)
}
 
    return (
    <div className="state">
<div className="num">{count}</div>
<button onClick={incFun} >Increment</button>
</div>
    )
  }

