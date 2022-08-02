import { createActionGroup, emptyProps } from "@ngrx/store";



export const counterEvents = createActionGroup({
  source: 'Counter Component',
  events: {
    increment: emptyProps(),
    decrement: emptyProps(),
    reset: emptyProps()
  }
})
