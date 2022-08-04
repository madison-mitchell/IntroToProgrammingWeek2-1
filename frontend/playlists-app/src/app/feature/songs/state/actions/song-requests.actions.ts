import { createActionGroup, props } from "@ngrx/store";
import { SongCreateModel } from "../../models";
import { SongEntity } from "../reducers/song-list.reducer";



export const SongRequestCommands = createActionGroup({
  source: 'Songs Feature - Song Request Commands',
  events: {
    create: props<{ payload: SongCreateModel }>()
  }
})


export const SongRequestDocuments = createActionGroup({
  source: 'Songs Feature - Song Reques Documents',
  events: {
    song: props<{ payload: SongEntity }>()
  }
})
