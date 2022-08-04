import { createReducer, on } from "@ngrx/store";
import { ErrorCommands } from "../actions/error.actions";
import { SongEvents } from "../actions/songs.actions";

export interface ErrorsState {
  hasErrors: boolean;
  error: string
}

const initialState: ErrorsState = {
  hasErrors: false,
  error: ''

}


export const reducer = createReducer(
  initialState,
  on(ErrorCommands.clear, () => initialState),
  on(SongEvents.songerror, (s, a) => ({ ...s, hasErrors: true, error: a.message + a.payload.title }))
)
