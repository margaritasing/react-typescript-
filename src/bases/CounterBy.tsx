import { click } from "@testing-library/user-event/dist/click";
import { useState } from "react"

interface Props {
  initialValue?: number;
}

interface CounterState {
  counter:number,
  clicks: number,
}


export const CounterBy = ({initialValue = 0 }: Props) => {

const [{ counter, clicks }, setCounterState] = useState<CounterState>({ // Se le pasa un objeto a el estado
    counter: initialValue,                         // porque se necesita saber los dos valores 
    clicks: 0,                                     // cantidad de click y la suma del contador.
});



const handleClick = (value:number) => {
    setCounterState(({clicks, counter}) => ({
      counter: counter + value,
      clicks: clicks + 1
    }));
}



  return (
    <div>
       <h1>CounterBy: { counter }</h1>
       <h1>Clicks: { clicks }</h1>
       <button onClick={ () => handleClick(1) }>+1</button>
       <button onClick={ () => handleClick(5) }>+5</button>
    </div>
  )
}
