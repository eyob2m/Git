import React from 'react'
export default function Effect(){

const [dat,setdat] = React.useState({})

fetch("https://telewin.ethiotelecom.et?token=GAME.1689008842099.0095dbe311852fc65e2a204836eeac2b")
.then(ref => ref.json())
.then(data => setdat(data)) 
return (
 
 <p> {JSON.stringify(dat,null,2)} </p>

)


}