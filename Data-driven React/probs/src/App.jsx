import React from 'react'
import Items from './items'
import data from './all'
export default function App(){
 
 const cards  = data.map(item => {
  return (
   
    <Items key={item.name}
    item = {item}
    />
  )
 })

return (
<div className="home">

  {cards}
 </div>
)

}