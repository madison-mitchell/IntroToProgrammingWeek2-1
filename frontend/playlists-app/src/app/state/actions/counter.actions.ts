import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { CounterState } from "../reducers/counter.reducer";



export const counterEvents = createActionGroup({
  source: 'Counter Component',
  events: {
    increment: emptyProps(),
    decrement: emptyProps(),
    reset: emptyProps(),
    countBySet: props<{by:number}>()
  }
})


export const counterDocuments = createActionGroup({
  source: 'Counter Component Documents',
  events: {
    counter: props<{payload: CounterState}>()
  }
})
