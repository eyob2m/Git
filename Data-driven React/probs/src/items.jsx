import React from 'react'
import image from './assets/images/jordan.jpg'
export default function Items(props) {

return (
<div className="items">
{props.sold===0&&<div className="sold">Sold Out</div> }
<img src={image} />
<div className="info">
<div className="rate">
 <div className="star"><i className="ri-star-fill"></i></div> {props.item.rate}(6) <span>USA</span>  
</div>
<div className="name">{props.item.name}</div>
<div className="price"><span>From ${props.item.price}</span> / person</div>
</div></div>
)
}

