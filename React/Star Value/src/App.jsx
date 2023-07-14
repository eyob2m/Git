import React from 'react'

import "./index.css"

export default function App(){

const [name,fun] = React.useState({f: "",l: ""})

function Ok(e) {

  fun( function(okk) {
    return {
      ...okk,
      [e.target.name]: e.target.value
    }
  } )

  console.log(name)

}

  return (
    <>
   <input onChange={Ok} type="text" name="f" />
   <input onChange={Ok} type="text" name="l"/> </>
  )

}