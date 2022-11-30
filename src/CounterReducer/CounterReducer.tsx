import { useReducer } from "react"
import { CounterState } from "./interface/interfaces";
import { counterReducerComponent } from "./reducer/counterReducer";
import * as action  from './actions/action';



const INITIAL_STATE: CounterState = {
  counter:10,
  previous: 15,
  changes:20
}


export const CounterReducer = () => {

const [ counterState , dispatch] = useReducer(counterReducerComponent, INITIAL_STATE);

const handleClick = () => {
  dispatch( action.doReset() )
}

const increaseBy = (value:number) => {
  dispatch(action.doIncremental(value))

}

  return (
    <div>
      <h1>CounterReducer Segmentado</h1>
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
