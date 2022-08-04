import { createActionGroup, emptyProps } from "@ngrx/store";


export const ErrorCommands = createActionGroup({
  source: 'Songs Errors',
  events: {
    clear: emptyProps()
  }
})
