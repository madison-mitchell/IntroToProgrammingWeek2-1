import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import { SongRequestCommands, SongRequestDocuments } from '../actions/song-requests.actions';
import { SongEvents, SongsDocuments } from '../actions/songs.actions';
import { SongEntity } from './song-list.reducer';



export interface SongsRequestsState extends EntityState<SongEntity> {

}

export const adapter = createEntityAdapter<SongEntity>();

const initialState = adapter.getInitialState();

export const reducer = createReducer(
  initialState,
  on(SongEvents.songerror, (s, a) => {
    if (a.tempId) {
      return adapter.removeOne(a.tempId, s)
    } else {
      return s
    }
  }),
  on(SongRequestDocuments.song, (s, a) => adapter.addOne(a.payload, s)),
  on(SongsDocuments.song, (s, a) => adapter.removeOne(a.tempId, s))
);

