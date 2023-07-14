import React from 'react'

export default function App() {

const [ok,fun] = React.useState(0);

function ls(){
 fun(ok-1)
}
function gr(){
  fun(ok+1)
 }


  return(
<div className="all">


<div className="num">
<button className="less" onClick={ls}>-</button>
 {ok}
<button className="gr" onClick={gr}>+</button></div>


</div>


  )

}