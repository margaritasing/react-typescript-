import { useReducer } from "react"

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
  const { counter, changes } = state;  

  switch (action.type) {
      case 'reset':
          return {
            counter:0,
            previous: 0,
            changes:0
          }

      case 'incremental':       
          return {
            changes: changes + 1,
            counter: counter + action.payload.value,
            previous: counter            
                    
          }
    
      default:
        return state;
    }
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
      <h1>CounterReducer</h1>
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
