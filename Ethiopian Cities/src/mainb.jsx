import React from 'react'
import ph from "./assets/ethioc/gonder.jpeg"
export default function Main(props){




  
return (
<>
  <div className="main">
<div className="left">
<img src={ph} alt="img" /> </div>
<div className="right">
<h2><i className="ri-map-pin-line"></i><span>{props.place.location} </span><a href={props.place.map} rel="noreferrer" target="_blank"> View on google Maps</a></h2>
<h1>{props.place.title}</h1>
<p>{props.place.des}</p>

</div>

  </div>  
  <div className="hr"><hr  /></div>
  </>
)

}