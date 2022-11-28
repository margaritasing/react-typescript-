import { click } from "@testing-library/user-event/dist/click";
import { useState } from "react"

interface Props {
    initialValue?: number;
}


export const CounterBy = ({initialValue = 0 }: Props) => {

const [counterState, setCounterState] = useState({ // se le pasa un objeto a el estado
    counter: initialValue,                         // porque se necesita saber los dos valores 
    clicks: 0,                                     // cantidad de click y la suma del contador
});

const { counter, clicks } = counterState; 

const handleClick = (value:number) => {
    setCounterState(pre => ({
      counter: pre.counter + value,
      clicks: pre.clicks + 1
    }));
}



  return (
    <div>
       <h1>CounterBY: { counter }</h1>
       <h1>Clicks: { clicks }</h1>
       <button onClick={ () => handleClick(1) }>+1</button>
       <button onClick={ () => handleClick(5) }>+5</button>
    </div>
  )
}
