import { type } from "os";
import { useReducer, useState } from "react"

interface  CounterState {
  counter:number,
  previous:number,
  changes:number
}

const INITIAL_STATE: CounterState = {
  counter:10,
  previous: 15,
  changes:20
}

type CounterAction = 
| {type:'incremental', payload: { value:number}}
| {type:'reset'}


const counterReducerComponent = (state:CounterState, action: CounterAction): CounterState => {
    switch (action.type) {
      case 'reset':
          return {
            counter:0,
            previous: 0,
            changes:0
          }
    
      default:
        return state;
    }
}


export const CounterReducer = () => {

const [{counter, previous, changes }, dispatch] = useReducer(counterReducerComponent, INITIAL_STATE)
const handleClick = () => {
    dispatch({ type:'reset' })
}

  return (
    <div>
      <h1>CounterReducer: { counter }</h1>
      <button onClick={handleClick}>
        Reset
      </button>
    </div>
  )
}
