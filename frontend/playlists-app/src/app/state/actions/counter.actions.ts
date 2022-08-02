import { createActionGroup, emptyProps, props } from "@ngrx/store";



export const counterEvents = createActionGroup({
  source: 'Counter Component',
  events: {
    increment: emptyProps(),
    decrement: emptyProps(),
    reset: emptyProps(),
    countBySet: props<{by:number}>()
  }
})
