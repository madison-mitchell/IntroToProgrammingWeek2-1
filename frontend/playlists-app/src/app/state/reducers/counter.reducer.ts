import { createReducer, on } from "@ngrx/store";
import { counterEvents } from "../actions/counter.actions";
export interface CounterState {
  current: number;
}

const initialState: CounterState = {
  current: 0
}


export const reducer = createReducer(initialState,
  on(counterEvents.reset, () => initialState),
  on(counterEvents.increment, incrementTheCount),
  on(counterEvents.decrement, (s ) => ({current: s.current -1}))
  )



  function incrementTheCount(state:CounterState): CounterState {
    return {
      current: state.current + 1
    }
  }
