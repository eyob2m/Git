import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu(){
return (
<div className="main">
    <div className="all">
<h2>There 10 types of Hooks in React</h2>
<p> <Link to="/state">useState</Link> </p>
<p> <Link to="/reducer">useReducer</Link> </p>
<p> <Link to="/effect">useEffect</Link> </p>
<p> <Link to="/reducer">useReducer</Link> </p>
<p> <Link to="/reducer">useReducer</Link> </p>
</div>
</div>
)


}