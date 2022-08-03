import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import { SongsDocuments } from '../actions/songs.actions';
export interface SongEntity {
  id: string;
  title: string;
  artist: string;
  album?: string;
}

export interface SongListState extends EntityState<SongEntity> {

}

export const adapter = createEntityAdapter<SongEntity>();

const initialState = adapter.getInitialState();

export const reducer = createReducer(
  initialState,
  on(SongsDocuments.songs, (s, a) => adapter.setAll(a.payload, s))
);

