import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { SongCreateModel } from "../../models";
import { SongEntity } from "../reducers/song-list.reducer";


export const SongEvents = createActionGroup({
  source: 'Songs Feature - Songs Events',
  events: {
    newSongCreated: props<{ payload: SongCreateModel }>(),
    songError: props<{ payload: SongCreateModel, message: string, tempId?: string }>()
  }
})


export const SongCommands = createActionGroup({
  source: 'Songs Feature - Songs Commands',
  events: {
    load: emptyProps(),
    add: props<{ payload: SongCreateModel, tempId: string }>()

  }
})


export const SongsDocuments = createActionGroup({
  source: 'Songs Feature - Songs Documents',
  events: {
    song: props<{ payload: SongEntity, tempId: string }>(),
    songs: props<{ payload: SongEntity[] }>()
  }
})
