import { useEffect, useRef, useState } from "react";
import { gsap } from 'gsap';

const MAXIMUN_COUNT = 10;


export const CounterHooks = () => {

const [counter, setCounter] = useState(5);
const counterElement = useRef<HTMLHeadingElement>(null)

const handleClick = () => { 
  setCounter(pre => Math.min(pre + 1, MAXIMUN_COUNT));
}

useEffect(() => {
  if (counter < 10) return ; 
  console.log('%cSe llego al valor máximo', 'color:red; background-color:black');

  const tl = gsap.timeline();
  tl.to(counterElement.current,{ y:-15, duration:0.2, ease: 'ease.out' })
    .to(counterElement.current, {y:0, duration:1, ease:'bounce.out' })
    //animaciones en react con esta libreria, se pasa por referencia usando el useRef
  
}, [counter])


  return (
    <div>
       <h1>CounterEffect:</h1>
       <h2 ref={ counterElement }>{ counter }</h2>
       <button onClick={handleClick}>+1</button>
    </div>
  )
}
