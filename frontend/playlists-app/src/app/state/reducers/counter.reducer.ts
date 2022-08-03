import { createReducer, on } from "@ngrx/store";
import { counterEvents } from "../actions/counter.actions";
import { counterDocuments } from "../actions/counter.actions";

export interface CounterState {
  current: number;
  by: number;
}

const initialState: CounterState = {
  current: 0,
  by: 1
}


export const reducer = createReducer(initialState,
  on(counterDocuments.counter, (_, a) => a.payload),
  on(counterEvents.countbyset, (currentState, action) => ({ ...currentState, by: action.by })),
  on(counterEvents.reset, () => initialState),
  on(counterEvents.increment, incrementTheCount),
  on(counterEvents.decrement, (s) => ({ ...s, current: s.current - s.by }))
)



function incrementTheCount(state: CounterState): CounterState {
  return {
    current: state.current + state.by,
    by: state.by
  }
}
