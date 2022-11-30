import { type } from "os";
import { useReducer, useState } from "react"
import { CounterState } from "./interface/interfaces";
import { counterReducerComponent } from "./reducer/counterReducer";



const INITIAL_STATE: CounterState = {
  counter:10,
  previous: 15,
  changes:20
}


export const CounterReducer = () => {

const [ counterState , dispatch] = useReducer(counterReducerComponent, INITIAL_STATE)
const handleClick = () => {
  dispatch({ type:'reset' })
}

const increaseBy = (value:number) => {
  dispatch({ type: 'incremental', payload:{ value } })

}

  return (
    <div>
      <h1>CounterReducer Sementado</h1>
      <pre>
        { JSON.stringify( counterState, null, 2 ) }
      </pre>
      <button onClick={() => increaseBy(1) }>
        +1
      </button>
      <button onClick={() => increaseBy(5) }>
        +5
      </button>
      <button onClick={() => increaseBy(10) }>
        +10
      </button>
      <button onClick={handleClick}>
        Reset
      </button>
    </div>
  )
}
