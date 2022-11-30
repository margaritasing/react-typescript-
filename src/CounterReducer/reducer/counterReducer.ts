import { CounterAction } from "../actions/action";
import { CounterState } from "../interface/interfaces";

export const counterReducerComponent = (state:CounterState, action: CounterAction): CounterState => {
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