import { createReducer } from "@ngrx/store";

export interface CounterState {
  current: number;
}

const initialState: CounterState = {
  current: 0
}


export const reducer = createReducer(initialState)


