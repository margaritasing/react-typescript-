import { useEffect, useState } from "react"

const MAXIMUN_COUNT = 10;


export const CounterEffect = () => {

const [counter, setCounter] = useState(5);

const handleClick = () => { 
  setCounter(pre => Math.min(pre + 1, MAXIMUN_COUNT));
}

useEffect(() => {
  if (counter < 10) return ; 
  console.log('%cSe llego al valor máximo', 'color:red; background-color:black')
}, [counter])


  return (
    <div>
       <h1>CounterEffect: { counter }</h1>
       <button onClick={handleClick}>+1</button>
    </div>
  )
}
