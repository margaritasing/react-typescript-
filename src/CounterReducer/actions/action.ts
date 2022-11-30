export type CounterAction = 
    | {type:'incremental', payload: { value:number}}
    | {type:'reset'}


/* export const doReset = (): CounterAction => {
    return {
        type: 'reset'
    }
} */

export const doReset = ():CounterAction => ({
    type: 'reset'    
})

export const doIncremental = (value:number):CounterAction => ({
    type: 'incremental',
    payload: {
        value:value
    }
})