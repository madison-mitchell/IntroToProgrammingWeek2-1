import { createActionGroup, emptyProps } from "@ngrx/store";



export const appEvents = createActionGroup({
  source: 'Application',
  events: {
    started: emptyProps()
  }
})
