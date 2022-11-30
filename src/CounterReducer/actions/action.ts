export type CounterAction = 
    | {type:'incremental', payload: { value:number}}
    | {type:'reset'}