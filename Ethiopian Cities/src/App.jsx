import React from 'react'
import Nav from './nav'
import Mainb from './mainb'
import Data from "./data"
import './index.css'
import Line from './line'

export default function App() {

const places = Data.map( function(place){

  return <Mainb key={place.location}
  place = {place} />

})

return (


<div className="all">
<Nav />
{places}
<Line />
</div>

)

}