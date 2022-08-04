import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { SongCreateModel } from "../../models";
import { SongEntity } from "../reducers/song-list.reducer";


export const SongEvents = createActionGroup({
  source: 'Songs Feature - Songs Events',
  events: {
    newSongCreated: props<{ payload: SongCreateModel }>()
  }
})


export const SongCommands = createActionGroup({
  source: 'Songs Feature - Songs Commands',
  events: {
    load: emptyProps(),
    add: props<{ payload: SongCreateModel }>()

  }
})


export const SongsDocuments = createActionGroup({
  source: 'Songs Feature - Songs Documents',
  events: {
    song: props<{ payload: SongEntity }>(),
    songs: props<{ payload: SongEntity[] }>()
  }
})
