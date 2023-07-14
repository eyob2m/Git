import React from 'react'

export default function Reducer(){

function reducer(state,action){
    switch(action.type) {
        case "inc":
            return {count: state.count +1 ,showText: state.showText};
        case "shtext":
            return {count: state.count  ,showText: !state.showText};
        default:
            state
    }

}


const [state,dispatcher] = React.useReducer(reducer, {count: 0, showText: true})
 

     
        return (
        <div className="state">
    <div className="num">{state.count}</div>
    <button onClick={ ()=> { dispatcher({type: "inc"}); dispatcher({type: "shtext"})} }>Increment</button>
    <p>{state.showText && "Even"  }</p>
    </div>
        )
}